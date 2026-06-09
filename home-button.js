(function() {
    // ===== UBAH URL HOME DI SINI =====
    const HOME_URL = '/';  // Ganti dengan URL tujuan
  
    // Buat tombol
    const btn = document.createElement('div');
    btn.id = 'myFloatingHomeBtn';
    btn.innerHTML = `
        <a href="${HOME_URL}" id="myHomeLink" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-decoration:none;">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z"/>
                <path d="M9 21V12H15V21"/>
            </svg>
        </a>
    `;
    
    // Style dengan prioritas maksimal
    const style = document.createElement('style');
    style.textContent = `
        #myFloatingHomeBtn {
            position: fixed !important;
            top: 20px !important;
            right: 20px !important;
            width: 50px !important;
            height: 50px !important;
            background: white !important;
            border-radius: 50% !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.25) !important;
            z-index: 2147483647 !important;
            cursor: pointer !important;
            transition: 0.2s !important;
            border: 1px solid #ddd !important;
        }
        #myFloatingHomeBtn:hover {
            transform: scale(1.08) !important;
            box-shadow: 0 6px 16px rgba(0,0,0,0.3) !important;
        }
        #myHomeLink {
            color: #333 !important;
        }
        #myFloatingHomeBtn:hover #myHomeLink {
            color: #007bff !important;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(btn);
    
    console.log('✅ Tombol Home berhasil dipasang');
})();