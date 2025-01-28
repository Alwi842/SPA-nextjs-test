import React from "react";

const LangkahPendaftaran = () => {
  return (
    <>
      <div class="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
        <h1 class="text-2xl font-bold mb-8 text-gray-800">
          Pendaftaran Mahasiswa Baru
        </h1>
        <div class="relative w-full">
          <div class="absolute h-full w-1 bg-gray-300 left-4 sm:left-1/2 transform sm:-translate-x-1/2"></div>

          {/* <!-- Step 1 --> */}
          <div class="flex items-center mb-8 sm:flex-row flex-col mr-11">
            <div class="flex w-full sm:w-1/2 justify-end pr-4 hidden sm:flex">
              <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <h2 class="text-lg font-semibold">
                  Step 1: Kunjungi Bank Mandiri Terdekat
                </h2>
                <p class="text-sm text-gray-600">
                  SIlahkan Kunjungi Bank Mandiri terdekat dan lakukan pembayaran
                  untuk mendaftar sebagai mahasiswa baru di Universitas
                  Muhammadiyah Tangerang. Anda akan mendapatkan Nomor Daftar dan
                  Kode Akses yang tertera pada Bukti Pembayaran
                </p>
              </div>
            </div>
            <div class="relative">
              <div class="w-12 h-12 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <div class="w-full sm:w-1/2 pl-4 sm:hidden">
              <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <h2 class="text-lg font-semibold">
                  Step 1: Kunjungi Bank Mandiri Terdekat
                </h2>
                <p class="text-sm text-gray-600">
                  SIlahkan Kunjungi Bank Mandiri terdekat dan lakukan pembayaran
                  untuk mendaftar sebagai mahasiswa baru di Universitas
                  Muhammadiyah Tangerang. Anda akan mendapatkan Nomor Daftar dan
                  Kode Akses yang tertera pada Bukti Pembayaran
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Step 2 --> */}
          <div class="flex items-center mb-8 sm:flex-row flex-col">
            <div class="w-full sm:w-1/2 hidden sm:flex"></div>
            <div class="relative">
              <div class="w-12 h-12 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <div class="flex w-full sm:w-1/2 pl-4">
              <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <h2 class="text-lg font-semibold">
                  Step 2: Kunjungi Web PMB UMT
                </h2>
                <p class="text-sm text-gray-600">
                  Silahkan kunjungi website Pendaftaran Mahasiswa baru di (
                  <a
                    href="http://pmb.umt.ac.id"
                    className="underline hover:text-blue-500"
                    target="_blank"
                  >
                    http://pmb.umt.ac.id
                  </a>
                  ) . Login menggunakan No Daftar dan Kode Akses.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Step 3 --> */}
          <div class="flex items-center mb-8 sm:flex-row flex-col mr-11">
            <div class="flex w-full sm:w-1/2 justify-end pr-4 hidden sm:flex">
              <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <h2 class="text-lg font-semibold">Step 3: Lengkapi Data</h2>
                <p class="text-sm text-gray-600">
                  Lengkapi Form Pendaftaran dengan Lengkap dan Benar. NIK, Nama
                  Lengkap harus sesuai dengan KTP/Ijazah Terakhir/Akta
                  Kelahiran. Pilih Jurusan dan Lokasi Ujian.
                </p>
              </div>
            </div>
            <div class="relative">
              <div class="w-12 h-12 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <div class="w-full sm:w-1/2 pl-4 sm:hidden">
              <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <h2 class="text-lg font-semibold">Step 3: Lengkapi Data</h2>
                <p class="text-sm text-gray-600">
                  Lengkapi Form Pendaftaran dengan Lengkap dan Benar. NIK, Nama
                  Lengkap harus sesuai dengan KTP/Ijazah Terakhir/Akta
                  Kelahiran. Pilih Jurusan dan Lokasi Ujian.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Step 4 --> */}
          <div class="flex items-center mb-8 sm:flex-row flex-col">
            <div class="w-full sm:w-1/2 hidden sm:flex"></div>
            <div class="relative">
              <div class="w-12 h-12 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <div class="flex w-full sm:w-1/2 pl-4">
              <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <h2 class="text-lg font-semibold">
                  Cetak Kartu Ujian Seleksi Masuk
                </h2>
                <p class="text-sm text-gray-600">
                  Setelah selesai melengkapi data pendaftaran, silahkan cetak
                  kartu ujian seleksi masuk untuk dibawa saat pelaksanaan
                  seleksi masuk.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Step 5 --> */}
          <div class="flex items-center sm:flex-row flex-col">
            <div class="flex w-full sm:w-1/2 justify-end pr-4 hidden sm:flex">
              <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <h2 class="text-lg font-semibold">
                  Step 5: Validasi Pendaftaran
                </h2>
                <p class="text-sm text-gray-600">
                  Kunjungi Kantor PMB di Kampus dan validasikan bukti
                  pendaftaran Anda untuk kemudian mendapatkan kepastian jadwal
                  ujian.
                </p>
              </div>
            </div>
            <div class="relative">
              <div class="w-12 h-12 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <div class="w-full sm:w-1/2 pl-4 sm:hidden">
              <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <h2 class="text-lg font-semibold">
                  Step 5: Validasi Pendaftaran
                </h2>
                <p class="text-sm text-gray-600">
                  Kunjungi Kantor PMB di Kampus dan validasikan bukti
                  pendaftaran Anda untuk kemudian mendapatkan kepastian jadwal
                  ujian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LangkahPendaftaran;
