# BC35E_Capstone2_PhanNhutQuang_LeThanhHoang
#### Deploy: *https://quangpn7.github.io/BC35E_Capstone2_PhanNhutQuang_LeThanhHoang/*
#### Youtube: *https://www.youtube.com/watch?v=58JAreLm8l0*

# TESTING OVERALL DOCUMENT
##### By: quangpn7
###### ==Date: 16 Oct 2022==

---

**1. index.html:**
- Test navbar's elements: Home, Men, Women -> assigned filter category function *the product will re-render*.
- Carousel (slider): automatic render product from API call (*category included*).
- Test button:
  + hover: scale-up (*some changes background-color*) .
  + onclick: redirect to somewhere/funciton depending on what kind of that button is.
- Test redirect `<a>`:
  + Pressing on left-top logo will redirect/reload to `index.html` .
  + Pressing at right-top `Register` will redirect to `register.html` .

**2. detail.html:**
- Test button:
    + Same hover effect as index.html .
    + button `+` and `-` cast as operators when user wants to add or minus product quantity that need to be add to cart.
    + button `Add to cart`:
        - onclick: adding user inputed product quantity into the cart/ basket. *Further function at cart maybe done later sometime*.
- Test related product:
    + Using render function of `index.html` to render related product (*based on API data return*).
- Test redirect: `<a>`:
    + Same as `index.html`

**3. register.html:**
- Validation:
    + ***Check the above document***
- Modal:
    + After successfully registered, a modal will show up, following with a button `Close` which is assigned to `reload the current page`.


---
# VALIDATION DOCUMENT
##### By: quangpn7
###### ==Date: 14 Oct 2022==

---
## BASIC RULES
- Email: include @ and '.' .
- Password: lowercase, Uppercase,number , speci@l characters included.
- Confirm password: must be matched with password above, user cannot copy  the inputed password above into clipboard.
- Name: A-Za-z characters only (included Vietnamese).
- Phone: only number (supported by HTML), length 9-16 (based on international phone number standard), +(regional number) excepted.
- Gender: auto select male (true on load), prevented from users uncheck by inspecting code.
---
## TEST CASE
>**1. Email:**

    - phannhutquang7820@gmail.com - PASSED
    - phanhutquang7820.com - failed "@"-missing
    - phannhutquang7820@gmail - failed "."-missing

>**2. Password:**

    - 776389@Quangg - PASSED
    - 7623123@quangg - failed "uppercase"-missing
    - 8271235Quangg - failed "special charaters"-missing
    - qu@Auangggg - failed "number"-missing
    - 0763998271628@Quangg - failed "length"-too long (max = 16)
    - @123Cy - failed "length"-too short (min = 8)
  
**3. Name:**
    
    - Phan Nhut Quang - PASSED
    - Phan Nhựt Quang - PASSED
    - PhanNhutQuang - PASSED
    - phan nhut quang - PASSED
    - phan nhựt quang - PASSED
    - PHAN NHUT QUANG - PASSED
    - PHAN NHỰT QUANG - PASSED
    - Phan Nhựt Quang 7 - failed "number" was included
    - Ph@an nhựt Qu@ang - failed "special character/s was/were included"
**4. Phone**

    - 0763907866 - PASSED
    - +8463907866 - PASSED
    - 123345 - failed "length"-too short (min = 9)
    - 293712937901273120 "length"-too long (max = 16)
---
## QUICK PASSED TEST
#### -Email: harryMaguire@gmail.com
#### -Password: 776352@Harry
#### -Name: Harry Maguire
#### -Phone: +1877629927

---
# TASKING

| **CAPSTONE 2**                           | **Task**                         | **In charge**          | **Start-day** | **End-date** |
|:----------------------------------:|:--------------------------------:|:----------------------:|:-------------:|:------------:|
| LAYOUT (HTML, SCSS, animation,...) | index.html                       | Nhựt Quang             | 05/10         | 06/10        |
|                                    | detail.html                      | Thanh Hoàng            | 10/10         | 11/10        |
|                                    | register.html                    | Thanh Hoàng            | 10/10         | 11/10        |
| JS (Validation, call API,...)      | validation                       | Nhựt Quang             | 14/10         | 14/10        |
|                                    | API index                        | Thanh Hoàng            | 06/10         | 06/10        |
|                                    | API detail                       | Nhựt Quang             | 14/10         | 14/10        |
|                                    | API register                     | Nhựt Quang             | 14/10         | 14/10       |
| Other                              | GitHub (create repo, deploy,...) | Nhựt Quang             | 05/10         | 15/10        |
|                                    | Youtube (recording, uploading)   | Thanh Hoàng            | 14/10         | 14/10        |
|                                    | Document                         | Nhựt Quang             | 15/10         | 16/10        |
|                                    | Testing                          | Nhựt Quang/Thanh Hoàng | 14/10         | 14/10        |
