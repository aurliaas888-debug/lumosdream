'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Building2, 
  Home, 
  MapPin, 
  Phone, 
  Mail, 
  Shield,
  FileText,
  ChevronRight,
  Star,
  Users,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PT LUMOS DREAM PROPERTINDO</h1>
                <p className="text-xs text-gray-500">Professional Property Solutions</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setActiveTab('about')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'about' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Tentang Kami
              </button>
              <button 
                onClick={() => setActiveTab('services')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'services' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Layanan
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Kontak
              </button>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={() => window.open('/api/privacy', '_blank')}>
                  <FileText className="w-4 h-4 mr-1" />
                  Privacy
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.open('/api/terms', '_blank')}>
                  <Shield className="w-4 h-4 mr-1" />
                  Terms
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-400 text-blue-900 hover:bg-yellow-300">
                <Star className="w-4 h-4 mr-1" />
                Trusted Property Partner
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                PT LUMOS DREAM<br/>
                <span className="text-yellow-300">PROPERTINDO</span>
              </h2>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Solusi properti profesional berbasis layanan perdagangan eceran dengan kontrak yang transparan dan terpercaya.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">
                  <Home className="w-5 h-5 mr-2" />
                  Jelajahi Properti
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="PT LUMOS DREAM PROPERTINDO Logo" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'about' && (
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Tentang PT LUMOS DREAM PROPERTINDO</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Perusahaan profesional yang bergerak di bidang perdagangan eceran properti berdasarkan balas jasa atau kontrak, 
                  menyediakan solusi properti terpercaya untuk kebutuhan Anda.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Berpengalaman</h4>
                  <p className="text-sm text-gray-600">Tim profesional dengan pengalaman bertahun-tahun di industri properti</p>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Terpercaya</h4>
                  <p className="text-sm text-gray-600">Transparansi dan integritas dalam setiap transaksi</p>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Klien Fokus</h4>
                  <p className="text-sm text-gray-600">Kepuasan klien adalah prioritas utama kami</p>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Berkembang</h4>
                  <p className="text-sm text-gray-600">Selalu berinovasi untuk memberikan layanan terbaik</p>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Layanan Kami</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Berbagai layanan properti profesional untuk memenuhi kebutuhan Anda
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Jual Beli Properti</h4>
                  <p className="text-gray-600 mb-4">
                    Layanan jual beli properti profesional dengan proses yang transparan dan aman
                  </p>
                  <Button variant="outline" className="w-full">
                    Pelajari Lebih Lanjut
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Konsultasi Properti</h4>
                  <p className="text-gray-600 mb-4">
                    Konsultasi profesional untuk membantu Anda menemukan properti yang tepat
                  </p>
                  <Button variant="outline" className="w-full">
                    Pelajari Lebih Lanjut
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Layanan Kontrak</h4>
                  <p className="text-gray-600 mb-4">
                    Pengelolaan kontrak properti yang profesional dan terpercaya
                  </p>
                  <Button variant="outline" className="w-full">
                    Pelajari Lebih Lanjut
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Kami siap membantu kebutuhan properti Anda
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <Card className="p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Informasi Kontak</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Alamat</p>
                        <p className="text-gray-600">
                          Ruko Pinangsia Blok B-12, Jalan Citanduy Raya, Desa/Kelurahan Jatireja,
                          Kec. Cikarang Timur, Kab. Bekasi, Provinsi Jawa Barat
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Telepon</p>
                        <p className="text-gray-600">085353876138</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">info@lumosdreampropertindo.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Jam Operasional</p>
                        <p className="text-gray-600">Senin - Jumat: 09:00 - 17:00</p>
                        <p className="text-gray-600">Sabtu: 09:00 - 15:00</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Kirim Pesan</h4>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                      <textarea 
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tuliskan pesan Anda..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Kirim Pesan
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">PT LUMOS DREAM PROPERTINDO</h3>
                  <p className="text-xs text-gray-400">Professional Property Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Solusi properti profesional berbasis layanan perdagangan eceran dengan kontrak yang transparan.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Jual Beli Properti</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi Properti</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Layanan Kontrak</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investasi Properti</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tim Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testimoni</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button 
                    onClick={() => window.open('/api/privacy', '_blank')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.open('/api/terms', '_blank')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Refund</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 PT LUMOS DREAM PROPERTINDO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}