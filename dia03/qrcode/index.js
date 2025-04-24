import qrcode from 'qrcode-terminal';
qrcode.generate('Bienvenidos a Full Stack');
qrcode.generate('https://cei.es/', {small: true})