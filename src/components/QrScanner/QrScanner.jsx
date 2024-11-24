import React, { useState, useRef, useEffect } from 'react';
import './qrScanner.scss'
import Scanner from 'qr-scanner';
import { PopupFormWrapper } from '@components';

function QrScanner({ eventEdit, open, setOpen }) {
    const [cameraOn, setCameraOn] = useState(false);
    const [data, setData] = useState('');
    const videoRef = useRef(null); // Reference untuk <video> element
    const qrScannerRef = useRef(null); // Reference untuk QrScanner
    const [stream, setStream] = useState(null); // State untuk menyimpan stream kamera
  
    // Fungsi untuk menghidupkan kamera
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream); // Simpan stream
        videoRef.current.play();
  
        // Inisialisasi QR Scanner
        qrScannerRef.current = new Scanner(videoRef.current, (result) => setData(result));
        qrScannerRef.current.start();
      } catch (err) {
        console.error('Error accessing camera: ', err);
      }
    };
  
    // Fungsi untuk menghentikan kamera
    const stopCamera = () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.stop();
      }
      if (stream) {
        stream.getTracks().forEach((track) => track.stop()); // Hentikan semua track
        setStream(null); // Hapus stream
      }
      setData('')
    };
  
    // Efek samping untuk menghidupkan/mematikan kamera berdasarkan state
    useEffect(() => {
      if (cameraOn) {
        startCamera();
      } else {
        stopCamera();
      }
  
      // Hentikan kamera saat component di-unmount
      return () => stopCamera(); // eslint-disable-next-line
    }, [cameraOn]);

    useEffect(() => {
        if (data) {
            setCameraOn(false)
            eventEdit(data)
        }
    }, [data])

    const handleOnSubmit = () => {
        setOpen(false)
    }

    return (
      <PopupFormWrapper
        open={open}
        setOpen={setOpen}
        titleForm="QR Code Scanner"
        isDetailMode={true}
        handleOnSubmit={handleOnSubmit}
      >
        <div className='ai-qr-scanner__container'>
            {/* Video feed kamera */}
            {cameraOn && <video ref={videoRef} style={{ width: '300px' }} />}

            {/* Tombol untuk menghidupkan dan mematikan kamera */}
            <button onClick={() => setCameraOn(!cameraOn)}>
              {cameraOn ? 'Matikan Kamera' : 'Hidupkan Kamera'}
            </button>
        </div>
      </PopupFormWrapper>
    );
}

export default QrScanner