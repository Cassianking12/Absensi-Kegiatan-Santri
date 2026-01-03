import { useState } from "react";

function App() {
  const [halaman, setHalaman] = useState("dashboard");
  const [santri, setSantri] = useState([]);
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");

  const [absensi, setAbsensi] = useState([]);

  function tambahSantri() {
    if (nama === "" || kelas === "") {
      alert("Nama dan kelas harus diisi");
      return;
    }

    setSantri([...santri, { nama, kelas }]);
    setNama("");
    setKelas("");
  }

  function catatAbsensi(namaSantri, status) {
    setAbsensi([
      ...absensi,
      { nama: namaSantri, status, waktu: new Date().toLocaleString() }
    ]);
  }

  function renderHalaman() {
    if (halaman === "dashboard") {
      return <p>Selamat datang di aplikasi SIAP Pesantren</p>;
    }

    if (halaman === "santri") {
      return (
        <div>
          <h3>Tambah Data Santri</h3>

          <input
            placeholder="Nama santri"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <br /><br />

          <input
            placeholder="Kelas"
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
          />
          <br /><br />

          <button onClick={tambahSantri}>Tambah</button>

          <hr />

          <h3>Daftar Santri</h3>
