import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const termsConditions = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms & Conditions - PT LUMOS DREAM PROPERTINDO</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen">
    <div class="max-w-4xl mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="text-center mb-8">
                <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                </div>
                <h1 class="text-3xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
                <p class="text-lg text-blue-600 font-semibold">PT LUMOS DREAM PROPERTINDO</p>
                <p class="text-sm text-gray-500">Terakhir diperbarui: ${new Date().toLocaleDateString('id-ID')}</p>
            </div>

            <div class="prose max-w-none">
                <h2 class="text-xl font-bold text-gray-900 mb-4">1. Penerimaan Syarat dan Ketentuan</h2>
                <p class="text-gray-700 mb-6">
                    Selamat datang di PT LUMOS DREAM PROPERTINDO. Dengan mengakses dan menggunakan layanan kami, 
                    Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, 
                    Anda tidak boleh menggunakan layanan kami.
                </p>

                <h2 class="text-xl font-bold text-gray-900 mb-4">2. Definisi</h2>
                <div class="space-y-2 mb-6">
                    <p class="text-gray-700"><strong>"Perusahaan"</strong> merujuk pada PT LUMOS DREAM PROPERTINDO.</p>
                    <p class="text-gray-700"><strong>"Layanan"</strong> merujuk pada semua layanan properti yang disediakan oleh Perusahaan.</p>
                    <p class="text-gray-700"><strong>"Klien"</strong> merujuk pada individu atau entitas yang menggunakan layanan Perusahaan.</p>
                    <p class="text-gray-700"><strong>"Properti"</strong> merujuk pada real estate, tanah, atau bangunan yang diperdagangkan.</p>
                </div>

                <h2 class="text-xl font-bold text-gray-900 mb-4">3. Layanan Kami</h2>
                <p class="text-gray-700 mb-4">PT LUMOS DREAM PROPERTINDO menyediakan layanan:</p>
                <ul class="list-disc list-inside text-gray-700 mb-6">
                    <li>Perdagangan eceran properti berdasarkan balas jasa atau kontrak</li>
                    <li>Konsultasi properti profesional</li>
                    <li>Manajemen transaksi properti</li>
                    <li>Layanan perantara jual beli properti</li>
                    <li>Pengelolaan kontrak properti</li>
                </ul>

                <h2 class="text-xl font-bold text-gray-900 mb-4">4. Kewajiban Klien</h2>
                <p class="text-gray-700 mb-4">Sebagai klien, Anda setuju untuk:</p>
                <ul class="list-disc list-inside text-gray-700 mb-6">
                    <li>Memberikan informasi yang akurat dan lengkap</li>
                    <li>Mematuhi semua perjanjian dan kontrak yang dibuat</li>
                    <li>Melakukan pembayaran sesuai dengan kesepakatan</li>
                    <li>Kooperatif dalam proses transaksi</li>
                    <li>Menjaga kerahasiaan informasi bisnis</li>
                    <li>Tidak melakukan kegiatan penipuan atau ilegal</li>
                </ul>

                <h2 class="text-xl font-bold text-gray-900 mb-4">5. Kewajiban Perusahaan</h2>
                <p class="text-gray-700 mb-4">PT LUMOS DREAM PROPERTINDO berkomitmen untuk:</p>
                <ul class="list-disc list-inside text-gray-700 mb-6">
                    <li>Menyediakan layanan profesional dan berkualitas</li>
                    <li>Menjaga kerahasiaan informasi klien</li>
                    <li>Transparansi dalam semua transaksi</li>
                    <li>Mematuhi hukum dan peraturan yang berlaku</li>
                    <li>Memberikan informasi yang akurat tentang properti</li>
                    <li>Menyelesaikan sengketa dengan cara yang adil</li>
                </ul>

                <h2 class="text-xl font-bold text-gray-900 mb-4">6. Biaya dan Pembayaran</h2>
                <div class="space-y-3 mb-6">
                    <p class="text-gray-700">
                        <strong>Struktur Biaya:</strong> Semua biaya akan dijelaskan secara transparan sebelum transaksi dimulai.
                    </p>
                    <p class="text-gray-700">
                        <strong>Metode Pembayaran:</strong> Pembayaran dapat dilakukan melalui metode yang disepakati bersama.
                    </p>
                    <p class="text-gray-700">
                        <strong>Jadwal Pembayaran:</strong> Pembayaran harus dilakukan sesuai dengan jadwal yang telah ditentukan.
                    </p>
                    <p class="text-gray-700">
                        <strong>Denda Keterlambatan:</strong> Denda dapat dikenakan untuk pembayaran terlambat sesuai kesepakatan.
                    </p>
                </div>

                <h2 class="text-xl font-bold text-gray-900 mb-4">7. Kebijakan Pembatalan</h2>
                <div class="space-y-3 mb-6">
                    <p class="text-gray-700">
                        <strong>Pembatalan oleh Klien:</strong> Pembatalan harus dilakukan secara tertulis dan mungkin dikenakan biaya pembatalan.
                    </p>
                    <p class="text-gray-700">
                        <strong>Pembatalan oleh Perusahaan:</strong> Perusahaan berhak membatalkan layanan jika terjadi pelanggaran syarat dan ketentuan.
                    </p>
                    <p class="text-gray-700">
                        <strong>Pengembalian Dana:</strong> Kebijakan pengembalian dana akan dijelaskan dalam setiap kontrak individual.
                    </p>
                </div>

                <h2 class="text-xl font-bold text-gray-900 mb-4">8. Hak Kekayaan Intelektual</h2>
                <p class="text-gray-700 mb-6">
                    Semua konten, merek dagang, logo, dan materi milik PT LUMOS DREAM PROPERTINDO dilindungi oleh hukum hak kekayaan intelektual. 
                    Anda tidak diperbolehkan menggunakan materi kami tanpa izin tertulis.
                </p>

                <h2 class="text-xl font-bold text-gray-900 mb-4">9. Kerahasiaan</h2>
                <p class="text-gray-700 mb-6">
                    Kedua belah pihak setuju untuk menjaga kerahasiaan semua informasi yang dibagikan selama kerja sama. 
                    Informasi rahasia tidak boleh dibagikan kepada pihak ketiga tanpa persetujuan tertulis.
                </p>

                <h2 class="text-xl font-bold text-gray-900 mb-4">10. Penyelesaian Sengketa</h2>
                <div class="space-y-3 mb-6">
                    <p class="text-gray-700">
                        <strong>Negosiasi:</strong> Sengketa akan diselesaikan terlebih dahulu melalui negosiasi yang baik.
                    </p>
                    <p class="text-gray-700">
                        <strong>Mediasi:</strong> Jika negosiasi gagal, sengketa dapat diselesaikan melalui mediasi.
                    </p>
                    <p class="text-gray-700">
                        <strong>Yurisdiksi:</strong> Untuk sengketa hukum, yurisdiksi adalah pengadilan di Kabupaten Bekasi.
                    </p>
                </div>

                <h2 class="text-xl font-bold text-gray-900 mb-4">11. Batasan Tanggung Jawab</h2>
                <p class="text-gray-700 mb-6">
                    PT LUMOS DREAM PROPERTINDO tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial 
                    yang timbul dari penggunaan layanan kami. Tanggung jawab kami dibatasi pada jumlah biaya yang dibayarkan untuk layanan.
                </p>

                <h2 class="text-xl font-bold text-gray-900 mb-4">12. Force Majeure</h2>
                <p class="text-gray-700 mb-6">
                    Perusahaan tidak bertanggung jawab atas kegagalan pelaksanaan kewajiban karena kejadian di luar kendali kami, 
                    termasuk tetapi tidak terbatas pada bencana alam, perang, pemogokan, atau tindakan pemerintah.
                </p>

                <h2 class="text-xl font-bold text-gray-900 mb-4">13. Perubahan Syarat dan Ketentuan</h2>
                <p class="text-gray-700 mb-6">
                    PT LUMOS DREAM PROPERTINDO berhak mengubah syarat dan ketentuan ini kapan saja. 
                    Perubahan akan diberitahukan melalui website atau email dan berlaku setelah 30 hari pemberitahuan.
                </p>

                <h2 class="text-xl font-bold text-gray-900 mb-4">14. Kontak Kami</h2>
                <div class="bg-gray-100 p-4 rounded-lg mb-6">
                    <p class="text-gray-700 mb-2"><strong>PT LUMOS DREAM PROPERTINDO</strong></p>
                    <p class="text-gray-700 mb-1">📍 Ruko Pinangsia Blok B-12, Jalan Citanduy Raya, Desa/Kelurahan Jatireja, Kec. Cikarang Timur, Kab. Bekasi, Provinsi Jawa Barat</p>
                    <p class="text-gray-700 mb-1">📞 085353876138</p>
                    <p class="text-gray-700">📧 info@lumosdreampropertindo.com</p>
                </div>

                <div class="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p class="text-sm text-blue-800 font-semibold mb-2">Pernyataan Persetujuan</p>
                    <p class="text-sm text-blue-800">
                        Dengan menggunakan layanan PT LUMOS DREAM PROPERTINDO, Anda menyatakan telah membaca, 
                        memahami, dan menyetujui Syarat dan Ketentuan ini sepenuhnya.
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
  `

  return new NextResponse(termsConditions, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
}