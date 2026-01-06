const fs = require("fs");
const path = require("path");

// --- AYARLAR ---
// Değiştirilecek dosya uzantıları
const targetExtensions = [".tsx", ".ts", ".js", ".json", ".md"];

// Taranacak klasörler
const targetDirs = ["app", "components", "lib", "public"];

// Numara Değişim Kuralları
const replacements = [
  // 1. Görünür Format (Boşluklu)
  {
    from: /0553 982 01 88/g,
    to: "0546 951 49 25",
  },
  // 2. Link Formatı (WhatsApp ve tel: linkleri için boşluksuz, +90'lı)
  {
    from: /905539820188/g,
    to: "905469514925",
  },
  // 3. Düz Format (Boşluksuz, 0 ile başlayan)
  {
    from: /05539820188/g,
    to: "05469514925",
  },
  // 4. Eski mail adresi (Genel bir info maili yoksa güncelleyelim)
  // Eğer mail değişecekse burayı aktif edebilirsiniz, şu an dokunmuyoruz.
];

// --- YARDIMCI FONKSİYONLAR ---

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

function updateFileContent(filePath) {
  const ext = path.extname(filePath);
  if (!targetExtensions.includes(ext)) return;

  try {
    let content = fs.readFileSync(filePath, "utf8");
    let originalContent = content;
    let hasChanges = false;

    replacements.forEach((rule) => {
      if (rule.from.test(content)) {
        content = content.replace(rule.from, rule.to);
        hasChanges = true;
      }
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`✅ Güncellendi: ${filePath}`);
    }
  } catch (err) {
    console.error(`❌ Hata (${filePath}):`, err);
  }
}

// --- ANA İŞLEM ---

console.log("🔄 Numara güncelleme işlemi başlatılıyor...");
console.log(`📞 Eski Numara (Tespit Edilecek): 0553 982 01 88`);
console.log(`mw📞 Yeni Numara (Yazılacak): 0546 951 49 25`);

// 1. Tüm dosyaları bul
let filesToScan = [];
targetDirs.forEach((dir) => {
  const fullPath = path.join(__dirname, dir);
  if (fs.existsSync(fullPath)) {
    filesToScan = getAllFiles(fullPath, filesToScan);
  }
});

// 2. Dosyaları güncelle
if (filesToScan.length === 0) {
  console.log(
    "⚠️ Taranacak dosya bulunamadı. Lütfen scripti proje ana dizininde çalıştırın."
  );
} else {
  filesToScan.forEach((file) => {
    updateFileContent(file);
  });
  console.log("\n🎉 İşlem tamamlandı! Lütfen projenizi kontrol edin.");
}
