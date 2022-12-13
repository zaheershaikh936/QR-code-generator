import React, { useState } from 'react'
import QRCode from 'qrcode';


const Card = () => {
    const [url, setUrl] = useState();
    const [qrcode, setQrcode] = useState();

    //! this function is used to create qr code 
    const GenerateQRCode = () => {
        QRCode.toDataURL(url, (err, url, ) => {
            // if error the return error
            if (err)
                return err;

            // if not then set buffer data into url variable
            setQrcode(url);
        })
    }

    return (
        <div className='card shadow'>
            <div className='card-header'>
                <center>
                    {/* checking qrcode is empty then show the default image else generated */}
                    {qrcode ? <div className='qr_div'><img src={qrcode} alt="default-qr" className="default_img"></img></div> : <img src="https://i.ibb.co/YWxt6V4/default-qr.png" alt="default-qr" className="default_img"></img>}
                </center>
            </div>
            <div>
                <div className='row'>
                    <div className='heading_h3'>
                        <input type="text" placeholder='URL' name='url' className='input_class' value={url} onChange={(event) => setUrl(event.target.value)} />
                    </div>
                    <div>
                        <button onClick={GenerateQRCode}>QR</button>
                    </div>
                </div>
                <center>
                    <p>
                        The QR code application is the perfect tool
                        <br></br>
                        To Generate QR Code anytime
                        <br></br>
                        For free
                    </p>
                    {
                        qrcode ? <a href={qrcode} download="qrcode.png">
                            <button className="download_button">Download</button>
                        </a> : ''
                    }
                </center>
            </div>
            <br></br>
        </div >
    );
}
export default Card