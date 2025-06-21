import Database from "better-sqlite3"
import { join } from "path"
import bcrypt from "bcryptjs"
import fs from "fs"

// Database file path
const db_fayl_yoli = join(process.cwd(), "malumotlar.db")

// Create database directory if it doesn't exist
const dbDir = join(process.cwd())
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true })
}

// Initialize database with error handling
let malumotlar_bazasi: Database.Database

try {
  malumotlar_bazasi = new Database(db_fayl_yoli)
  console.log("Database connection established successfully")

  // Enable foreign keys
  malumotlar_bazasi.pragma("foreign_keys = ON")

  // Create tables with error handling
  try {
    // Google Sheets table
    malumotlar_bazasi.exec(`
      CREATE TABLE IF NOT EXISTS google_sheets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL,
        link TEXT NOT NULL,
        sheet_id TEXT NOT NULL,
        varoqlar TEXT NOT NULL,
        yaratilgan_vaqt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Admin users table
    malumotlar_bazasi.exec(`
      CREATE TABLE IF NOT EXISTS adminlar (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        parol TEXT NOT NULL,
        yaratilgan_vaqt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Products table with rasmlar column
    malumotlar_bazasi.exec(`
      CREATE TABLE IF NOT EXISTS mahsulotlar (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL,
        tavsif TEXT,
        narx REAL NOT NULL,
        chegirma_narx REAL,
        miqdor INTEGER NOT NULL,
        sheet_id INTEGER NOT NULL,
        varoq_nomi TEXT NOT NULL,
        link TEXT UNIQUE NOT NULL,
        ranglar TEXT NOT NULL DEFAULT '[]',
        rasmlar TEXT DEFAULT '[]',
        yaratilgan_vaqt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (sheet_id) REFERENCES google_sheets (id)
      )
    `)

    // Orders table
    malumotlar_bazasi.exec(`
      CREATE TABLE IF NOT EXISTS buyurtmalar (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        mahsulot_id INTEGER NOT NULL,
        ism TEXT NOT NULL,
        telefon TEXT NOT NULL,
        tanlangan_rang TEXT NOT NULL,
        narx REAL NOT NULL,
        holat TEXT DEFAULT 'yangi',
        buyurtma_vaqti DATETIME NOT NULL,
        FOREIGN KEY (mahsulot_id) REFERENCES mahsulotlar (id)
      )
    `)

    // Legacy tables for backward compatibility
    malumotlar_bazasi.exec(`
      CREATE TABLE IF NOT EXISTS sahifalar (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL,
        link TEXT UNIQUE NOT NULL,
        sheet_id INTEGER NOT NULL,
        varoq_nomi TEXT NOT NULL,
        yaratilgan_vaqt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (sheet_id) REFERENCES google_sheets (id)
      )
    `)

    malumotlar_bazasi.exec(`
      CREATE TABLE IF NOT EXISTS yuborilgan_malumotlar (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sahifa_id INTEGER NOT NULL,
        ism TEXT NOT NULL,
        telefon TEXT NOT NULL,
        yuborilgan_vaqt DATETIME NOT NULL,
        FOREIGN KEY (sahifa_id) REFERENCES sahifalar (id)
      )
    `)

    console.log("Database tables created successfully")

    // Create default admin user if not exists
    const admin_mavjud = malumotlar_bazasi.prepare("SELECT COUNT(*) as count FROM adminlar").get()
    if (admin_mavjud.count === 0) {
      const hashed_password = bcrypt.hashSync("admin123", 10)
      malumotlar_bazasi
        .prepare("INSERT INTO adminlar (email, parol) VALUES (?, ?)")
        .run("admin@techstore.uz", hashed_password)
      console.log("Default admin created: admin@techstore.uz / admin123")
    }
  } catch (error) {
    console.error("Error creating database tables:", error)
  }
} catch (error) {
  console.error("Database connection error:", error)
  // Create a dummy database object to prevent app from crashing
  malumotlar_bazasi = {
    prepare: () => ({
      get: () => null,
      all: () => [],
      run: () => null,
    }),
    exec: () => null,
  } as any
}

export { malumotlar_bazasi }
