    // Tetapkan tanggal yang akan kita hitung mundur
   const countDownDate = new Date("Jun 16, 2023 16:00:00").getTime();

    // Perbarui hitungan mundur setiap 1 detik
   const x = setInterval(function() {
    
      // Dapatkan tanggal dan waktu hari ini
     const now = new Date().getTime();
    
      // Temukan jarak antara sekarang dan tanggal hitungan mundur
     const distance = countDownDate - now;
    
      // Perhitungan waktu untuk hari, jam, menit dan detik
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Tampilkan hasilnya dalam elemen dengan id="hitung-mundur"
      document.getElementById("hitung-mundur").innerHTML = days + "days " + hours + "hours " + minutes + "minutes " + seconds + "seconds ";
    
      // Jika hitungan mundur selesai, tulis teks "MELUNCUR"
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("hitung-mundur").innerHTML = "MELUNCUR";
      }
    }, 1000);