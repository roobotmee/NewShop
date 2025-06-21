import { type NextRequest, NextResponse } from "next/server"
import { join } from "path"
import { writeFile, mkdir } from "fs/promises"
import { randomBytes } from "crypto"
import { existsSync } from "fs"

// Rasmlar saqlanadigan papka
const UPLOADS_DIR = join(process.cwd(), "public", "uploads")

export async function POST(request: NextRequest) {
  try {
    // Papkani tekshirish va yaratish
    if (!existsSync(UPLOADS_DIR)) {
      await mkdir(UPLOADS_DIR, { recursive: true })
    }

    const formData = await request.formData()
    const file = formData.get("file") as File | null

    if (!file) {
      return NextResponse.json({ xato: "Fayl topilmadi" }, { status: 400 })
    }

    // Fayl nomini xavfsiz qilish
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Noyob fayl nomi yaratish
    const fileExt = file.name.split(".").pop() || "jpg"
    const fileName = `${randomBytes(16).toString("hex")}.${fileExt}`
    const filePath = join(UPLOADS_DIR, fileName)

    // Faylni saqlash
    await writeFile(filePath, buffer)

    // Fayl URL ni qaytarish
    const fileUrl = `/uploads/${fileName}`

    return NextResponse.json({
      muvaffaqiyat: true,
      fayl: {
        nom: file.name,
        url: fileUrl,
      },
    })
  } catch (xato) {
    console.error("Fayl yuklashda xato:", xato)
    return NextResponse.json({ xato: "Fayl yuklashda xato yuz berdi" }, { status: 500 })
  }
}
