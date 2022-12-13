import React, { useState } from 'react'
import QRCode from 'qrcode';


const Card = () => {
    const [url, setUrl] = useState();
    const [qrcode, setQrcode] = useState();

    const GenerateQRCode = () => {
        QRCode.toDataURL(url, (err, url, ) => {
            if (err)
                return err;

            setQrcode(url);
        })
    }

    // #2c7dfa
    return (
        <div className='card shadow'>
            <div className='card-header'>
                <center>
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
                    {/* <h3 className='heading_h3'>
                        Improve your front-end <br></br>skills by building projects
                    </h3> */}
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