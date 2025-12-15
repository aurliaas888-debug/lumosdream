import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const privacyPolicy = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy - PT LUMOS DREAM PROPERTINDO</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen">
    <div class="max-w-4xl mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="text-center mb-8">
                <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                </div>
                <h1 class="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                <p class="text-lg text-blue-600 font-semibold">PT LUMOS DREAM PROPERTINDO</p>
                <p class="text-sm text-gray-500">Terakhir diperbarui: ${new Date().toLocaleDateString('id-ID')}</p>
            </div>

            <div class="prose max-w-none">
                <h2 class="text-xl font-bold text-gray-900 mb-4">1. Pendahuluan</h2>
                <p class="text-gray-700 mb-6">
                    Selamat datang di PT LUMOS DREAM PROPERTINDO. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                    Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami.
                </p>

                <h2 class="text-xl font-bold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
                <div class="space-y-4 mb-6">
                    <div>
                        <h3 class="font-semibold text-gray-800">Informasi Pribadi:</h3>
                        <ul class="list-disc list-inside text-gray-700 ml-4">
                            <li>Nama lengkap</li>
                            <li>Alamat email</li>
                            <li>Nomor telepon</li>
                            <li>Alamat lengkap</li>
                            <li>Informasi identifikasi lainnya</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-800">Informasi Properti:</h3>
                        <ul class="list-disc list-inside text-gray-700 ml-4">
                            <li>Detail properti yang diminati</li>
                            <li>Riwayat transaksi</li>
                            <li>Preferensi properti</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-800">Informasi Teknis:</h3>
                        <ul class="list-disc list-inside text-gray-700 ml-4">
                            <li>Alamat IP</li>
                            <li>Data browser</li>
                            <li>Informasi perangkat</li>
                            <li>Cookie dan data pelacakan</li>
                        </ul>
                    </div>
                </div>

                <h2 class="text-xl font-bold text-gray-900 mb-4">3. Penggunaan Informasi</h2>
                <p class="text-gray-700 mb-4">Kami menggunakan informasi yang dikumpulkan untuk:</p>
                <ul class="list-disc list-inside text-gray-700 mb-6">
                    <li>Menyediakan layanan properti yang Anda minta</li>
                    <li>Mengelola transaksi dan kontrak</li>
                    <li>Mengkomunikasikan informasi terkait layanan</li>
                    <li>Meningkatkan kualitas layanan kami</li>
                    <li>Memenuhi kewajiban hukum dan peraturan</li>
                    <li>Melindungi keamanan dan integritas platform kami</li>
                </ul>

                <h2 class="text-xl font-bold text-gray-900 mb-4">4. Berbagi Informasi</h2>
                <p class="text-gray-700 mb-4">Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali:</p>
                <ul class="list-disc list-inside text-gray-700 mb-6">
                    <li>Dengan persetujuan Anda yang eksplisit</li>
                    <li>Untuk memenuhi kewajiban hukum</li>
                    <li>Dengan mitra bisnis tepercaya yang membantu menyediakan layanan</li>
                    <li>Dalam kasus penjualan atau merger perusahaan</li>
                </ul>

                <h2 class="text-xl font-bold text-gray-900 mb-4">5. Keamanan Data</h2>
                <p class="text-gray-700 mb-6">
                    Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses tidak sah, 
                    penggunaan yang tidak tepat, atau perubahan. Namun, tidak ada metode transmisi internet yang 100% aman.
                </p>

                <h2 class="text-xl font-bold text-gray-900 mb-4">6. Hak Anda</h2>
                <p class="text-gray-700 mb-4">Anda memiliki hak untuk:</p>
                <ul class="list-disc list-inside text-gray-700 mb-6">
                    <li>Mengakses informasi pribadi Anda</li>
                    <li>Memperbaiki informasi yang tidak akurat</li>
                    <li>Menghapus informasi pribadi Anda</li>
                    <li>Menolak penggunaan informasi untuk tujuan pemasaran</li>
                    <li>Membatasi pemrosesan informasi Anda</li>
                </ul>

                <h2 class="text-xl font-bold text-gray-900 mb-4">7. Kebijakan Cookie</h2>
                <p class="text-gray-700 mb-6">
                    Kami menggunakan cookie untuk meningkatkan pengalaman pengguna dan menganalisis penggunaan website. 
                    Anda dapat mengatur browser untuk menolak cookie, namun ini dapat mempengaruhi fungsionalitas website.
                </p>

                <h2 class="text-xl font-bold text-gray-900 mb-4">8. Perubahan Kebijakan</h2>
                <p class="text-gray-700 mb-6">
                    Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website atau email.
                </p>

                <h2 class="text-xl font-bold text-gray-900 mb-4">9. Kontak Kami</h2>
                <div class="bg-gray-100 p-4 rounded-lg mb-6">
                    <p class="text-gray-700 mb-2"><strong>PT LUMOS DREAM PROPERTINDO</strong></p>
                    <p class="text-gray-700 mb-1">📍 Ruko Pinangsia Blok B-12, Jalan Citanduy Raya, Desa/Kelurahan Jatireja, Kec. Cikarang Timur, Kab. Bekasi, Provinsi Jawa Barat</p>
                    <p class="text-gray-700 mb-1">📞 085353876138</p>
                    <p class="text-gray-700">📧 info@lumosdreampropertindo.com</p>
                </div>

                <div class="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p class="text-sm text-blue-800">
                        Dengan menggunakan layanan PT LUMOS DREAM PROPERTINDO, Anda menyetujui pengumpulan dan penggunaan informasi 
                        sesuai dengan Kebijakan Privasi ini.
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
  `

  return new NextResponse(privacyPolicy, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
}