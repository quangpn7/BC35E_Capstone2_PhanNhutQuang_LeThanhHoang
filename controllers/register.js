let validation = new Validation();
//FUNCTION GET USER INFO
let getUserInfo = () => {
  let userEmail = document.querySelector("#email").value;
  let userPass = document.querySelector("#password").value;
  let userConfPass = document.querySelector("#confirmPassword").value;
  let userName = document.querySelector("#name").value;
  let userPhone = document.querySelector("#phone").value;
  // TRY CATCH: using to prevent user inpects and edit 'checked' at the input element.
  try {
    var userGenderInp = document.querySelector(
      'input[name="gender"]:checked'
    ).value;
    if (userGenderInp === "true") {
      userGenderInp = true;
    } else {
      userGenderInp = false;
    }
  } catch (error) {
    var userGenderInp = null;
  }
  let userGender = userGenderInp;
  //   let userGender = document.querySelector('input[name="gender"]:checked').value;
  //   <----------------------------------------->
  //CHECK VALIDATION
  let isValid = false;

  // EMAIL
  isValid &=
    validation.checkBlank(userEmail, "#emailErr", "* Email không để trống") &&
    validation.checkReg(
      userEmail,
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "#emailErr",
      "* Email không hợp lệ"
    );
  // PASS
  isValid &=
    validation.checkBlank(userPass, "#passErr", "* Vui lòng nhập mật khẩu") &&
    validation.checkLength(
      userPass.length,
      8,
      16,
      "#passErr",
      "* Độ dài mật khẩu từ 8-16 ký tự (Có ký tự in Hoa, số và ký tự đặc biệt)"
    ) &&
    validation.checkReg(
      userPass,
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/,
      "#passErr",
      "* Mật khẩu phải có chữ in Hoa, số và ký tự đặc biệt"
    ) &&
    validation.checkConfirmPass(
      userPass,
      userConfPass,
      "#confirmPassErr",
      "* Mật khẩu không trùng khớp"
    );
  // NAME
  isValid &=
    validation.checkBlank(userName, "#nameErr", "* Vui lòng nhập tên") &&
    validation.checkReg(
      userName,
      "^[A-Za-z ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$",
      "#nameErr",
      "* Tên không hợp lệ"
    );
  // PHONE
  isValid &=
    validation.checkBlank(
      userPhone,
      "#phoneErr",
      "* Vui lòng nhập số điện thoại"
    ) &&
    validation.checkLength(
      userPhone.length,
      9,
      16,
      "#phoneErr",
      "* Số điện thoại không hợp lệ"
    );
  // GENDER
  isValid = validation.checkRadio(
    userGender,
    "#genderErr",
    "* Vui lòng chọn giới tính"
  );
  console.log("Test: ", isValid);
  console.log(userEmail, " ", typeof userEmail);
  console.log(userPass, " ", typeof userPass);
  console.log(userConfPass, " ", typeof userConfPass);
  console.log(userName, " ", typeof userName);
  console.log(userPhone, " ", typeof userPhone);
  console.log(userGender, " ", typeof userGender);
  console.log("<----------->");
};
