/* JavaScript */

function is_fully_shown(target, height) {
  var wt = $(window).scrollTop();
  var wh = $(window).height();
  var eh = $(target).height();
  var et = $(target).offset().top;

  return et + height + eh <= wh + wt;
}

var played = false;
$(window).scroll(function () {
  $(".one-transform.animation-transform").each(function () {
    if (is_fully_shown($(this), 120)) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".two-transform.animation-transform").each(function () {
    if (is_fully_shown($(this), 70)) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".three-transform.animation-transform").each(function () {
    if (is_fully_shown($(this), 30)) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".four-transform.animation-transform").each(function () {
    if (is_fully_shown($(this), 100)) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".five-transform.animation-transform").each(function () {
    if (is_fully_shown($(this), 130)) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });

  if (window.matchMedia("(max-width: 600px)").matches) {
    $("body").addClass("m-d");
    $(".five-transform.animation-transform").each(function () {
      if (is_fully_shown($(this), -320)) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

    $(".three-transform.animation-transform").each(function () {
      if (is_fully_shown($(this), 60)) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  }

  $(".six-transform.animation-transform").each(function () {
    if (is_fully_shown($(this), 130)) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".seven-transform.animation-transform").each(function () {
    if (is_fully_shown($(this), 150)) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".eight-transform.animation-transform").each(function () {
    if (is_fully_shown($(this), 140)) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".nine-transform.animation-transform").each(function () {
    if (is_fully_shown($(this), 200)) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".ten-transform.animation-transform").each(function () {
    if (is_fully_shown($(this), 20)) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".eleven-transform.animation-transform").each(function () {
    if (is_fully_shown($(this), 60)) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".questions-b.animation-transform").each(function () {
    if (is_fully_shown($(this), 60)) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});

var lang = $("#header-lang__link--DE").hasClass("header-lang__link--active")
  ? "de"
  : "eng";

$(document).ready(function () {
  $("#read_more").on("click", function () {
    $(".more-informations-body").slideToggle("fast");
    return false;
  });

  if (window.matchMedia("(min-width: 600px)").matches) {
    $(".btn_lang_en").on("click", function () {
      $(".more-informations-body--lang_en").slideToggle("slow");
      $(".more-informations-body--lang_de").slideUp("slow");
      return false;
    });

    $(".btn_lang_de").on("click", function () {
      $(".more-informations-body--lang_en").slideUp("slow");
      $(".more-informations-body--lang_de").slideToggle("slow");
      return false;
    });
  }

  if (window.matchMedia("(max-width: 600px)").matches) {
    $(".btn_lang_en").on("click", function () {
      $(".more-informations-body--lang_en").toggle();
      return false;
    });

    $(".btn_lang_de").on("click", function () {
      $(".more-informations-body--lang_de").toggle();
      return false;
    });
  }

  $(".form-personal-fill__input-checkbox").on("click", function () {
    $(this).parent().toggleClass("form-personal-fill__item-checkbox--checked");
  });

  $(".form-personal-fill-schedule__input-checkbox").on("click", function () {
    $(this)
      .parent()
      .toggleClass("form-personal-fill-schedule-checkbox--checked");
  });
  $(".text-drop-down__btn").click(function () {
    $(".text-drop-down__content").slideToggle("fast");
    $(".text-drop-down__btn").toggleClass("text-drop-down__btn--active");
    $(".plane-left").toggleClass("plane-left--toggle");
    return false;
  });
  if (
    document
      .getElementById("header-lang__link--DE")
      ?.classList.contains("header-lang__link--active")
  )
    document.body.classList.add("lang-de");
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

if (window.matchMedia("(max-width: 1100px)").matches) {
  $("body").addClass("m-d");
}
if (window.matchMedia("(min-width: 1100px)").matches && $('#home-page').length) {
  gsap.registerPlugin(ScrollTrigger);

  let sectionsOne = gsap.utils.toArray(".slider-full-one__item.panel");
  let sectionsTwo = gsap.utils.toArray(".slider-full-two__item.panel");
  let sectionsThree = gsap.utils.toArray(".slider-full-three__item.panel");
  let sectionsFour = gsap.utils.toArray(".slider-full-four__item.panel");
  let sectionsFive = gsap.utils.toArray(".slider-full-five__item.panel");
  let sectionsSix = gsap.utils.toArray(".slider-full-six__item.panel");

  gsap.to(sectionsOne, {
    xPercent: -100 * (sectionsOne.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".slider-full-one__wrap",
      pin: true,
      scrub: 1,
      snap: 1 / (sectionsOne.length - 1),
      end: "+=0",
    },
  });

  gsap.to(sectionsTwo, {
    xPercent: -100 * (sectionsTwo.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".slider-full-two__wrap",
      pin: true,
      scrub: 1,
      snap: 1 / (sectionsTwo.length - 1),
      end: "+=0",
    },
  });

  gsap.to(sectionsThree, {
    xPercent: -100 * (sectionsThree.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".slider-full-three__wrap",
      pin: true,
      scrub: 1,
      snap: 1 / (sectionsThree.length - 1),
      end: "+=0",
    },
  });

  gsap.to(sectionsFour, {
    xPercent: -100 * (sectionsFour.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".slider-full-four__wrap",
      pin: true,
      scrub: 1,
      snap: 1 / (sectionsFour.length - 1),
      end: "+=0",
    },
  });

  gsap.to(sectionsFive, {
    xPercent: -100 * (sectionsFive.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".slider-full-five__wrap",
      pin: true,
      scrub: 1,
      snap: 1 / (sectionsFive.length - 1),
      end: "+=0",
    },
  });

  gsap.to(sectionsSix, {
    xPercent: -100 * (sectionsSix.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".slider-full-six__wrap",
      pin: true,
      scrub: 1,
      snap: 1 / (sectionsSix.length - 1),
      end: "+=0",
    },
  });

  const tl = gsap
    .timeline({
      xPercent: -100 * (sectionsOne.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".slider-full-one__img",
        scrub: true,
        pin: false,

        start: "-110% 0%",
        end: "+=100%",
      },
    })

    .from(".slider-full-one__img-wrap", {
      scale: 0.5,
      ease: "none",
    });

  const tk = gsap
    .timeline({
      xPercent: -100 * (sectionsTwo.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".slider-full-two__img",
        scrub: true,
        pin: false,

        start: "-110% 0%",
        end: "+=100%",
      },
    })

    .from(".slider-full-two__img-wrap", {
      scale: 0.5,
      ease: "none",
    });

  const tkThree = gsap
    .timeline({
      xPercent: -100 * (sectionsThree.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".slider-full-three__img",
        scrub: true,
        pin: false,

        start: "-110% 0%",
        end: "+=100%",
      },
    })

    .from(".slider-full-three__img-wrap", {
      scale: 0.5,
      ease: "none",
    });

  const tkFour = gsap
    .timeline({
      xPercent: -100 * (sectionsFour.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".slider-full-four__img",
        scrub: true,
        pin: false,

        start: "-110% 0%",
        end: "+=100%",
      },
    })

    .from(".slider-full-four__img-wrap", {
      scale: 0.5,
      ease: "none",
    });

  const tkFive = gsap
    .timeline({
      xPercent: -100 * (sectionsFive.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".slider-full-five__img",
        scrub: true,
        pin: false,

        start: "-110% 0%",
        end: "+=100%",
      },
    })

    .from(".slider-full-five__img-wrap", {
      scale: 0.5,
      ease: "none",
    });

  const tkSix = gsap
    .timeline({
      xPercent: -100 * (sectionsSix.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".slider-full-six__img",
        scrub: true,
        pin: false,

        start: "-110% 0%",
        end: "+=100%",
      },
    })

    .from(".slider-full-six__img-wrap", {
      scale: 0.5,
      ease: "none",
    });
}
// variables
var formStep1 = document.getElementById("form-personal-fill-step-1"),
  formStep2 = document.getElementById("form-personal-fill-step-2"),
  formStep3 = document.getElementById("form-personal-fill-step-3"),
  formStep4 = document.getElementById("form-personal-fill-step-4"),
  schoolName = document.getElementById("school_name"),
  schoolAddress = document.getElementById("school_address"),
  city = document.getElementById("city"),
  state = document.getElementById("state"),
  country = document.getElementById("country"),
  emailAddress = document.getElementById("email_address"),
  tabStep1 = document.getElementById("form-personal-tabs__step-1"),
  tabStep2 = document.getElementById("form-personal-tabs__step-2"),
  tabStep3 = document.getElementById("form-personal-tabs__step-3"),
  tabStep4 = document.getElementById("form-personal-tabs__step-4"),
  courseTitleInput = document.getElementById("course-title-input"),
  coursesAddBtn = document.getElementById(
    "form-personal-fill__add-courses-btn",
  ),
  secondForm = document.getElementById("questions-b-form__form");

// validate email
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// return validation result
function validateStep1() {
  if (
    schoolName.value === "" ||
    schoolAddress.value === "" ||
    city.value === "" ||
    state.value === "" ||
    country.value === "" ||
    !validateEmail(emailAddress.value)
  )
    return false;
  else return true;
}

// validate first form
function validateStep() {
  [...formStep1.getElementsByClassName("form-personal-fill__item")].forEach(
    (item) => {
      var child = document.getElementById(item.firstElementChild.id + "-error");
      if (item.classList.contains("error")) {
        item.removeChild(child);
        item.classList.remove("error");
      }
    },
  );
  if (schoolName.value === "") schoolName.parentElement.classList.add("error");
  if (schoolAddress.value === "")
    schoolAddress.parentElement.classList.add("error");
  if (city.value === "") city.parentElement.classList.add("error");
  if (state.value === "") state.parentElement.classList.add("error");
  if (country.value === "") country.parentElement.classList.add("error");
  if (!validateEmail(emailAddress.value))
    emailAddress.parentElement.classList.add("error");
  [...formStep1.getElementsByClassName("form-personal-fill__item")].forEach(
    (item) => {
      var p = document.createElement("span");
      p.setAttribute("id", item.firstElementChild.id + "-error");
      if (lang === "de")
        p.innerHTML =
          item.firstElementChild.id === "email_address" &&
            emailAddress.value !== ""
            ? "Bitte eine gültige E-Mail-Adresse eingeben"
            : "Dies ist ein Pflichtfeld";
      else
        p.innerHTML =
          item.firstElementChild.id === "email_address" &&
            emailAddress.value !== ""
            ? "Enter a valid email"
            : "This field is required";
      if (item.classList.contains("error")) item.appendChild(p);
    },
  );
  return false;
}

// return validation second form result
function validationSecondForm() {
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    !validateEmail(email.value) ||
    message.value === ""
  )
    return false;
  else return true;
}

// validate second form
function validateSecondForm() {
  [...secondForm.getElementsByClassName("questions-b-form__item")].forEach(
    (item) => {
      var child = document.getElementById(item.firstElementChild.id + "-error");
      if (item.classList.contains("error")) {
        item.removeChild(child);
        item.classList.remove("error");
      }
    },
  );
  if (firstName.value === "") firstName.parentElement.classList.add("error");
  if (lastName.value === "") lastName.parentElement.classList.add("error");
  if (email.value === "") email.parentElement.classList.add("error");
  if (message.value === "") message.parentElement.classList.add("error");
  [...secondForm.getElementsByClassName("questions-b-form__item")].forEach(
    (item) => {
      var p = document.createElement("span");
      p.setAttribute("id", item.firstElementChild.id + "-error");
      if (lang === "de")
        p.innerHTML =
          item.firstElementChild.id === "email" && email.value !== ""
            ? "Bitte eine gültige E-Mail-Adresse eingeben"
            : "Dies ist ein Pflichtfeld";
      else
        p.innerHTML =
          item.firstElementChild.id === "email" && email.value !== ""
            ? "Enter a valid email"
            : "This field is required";

      if (item.classList.contains("error")) item.appendChild(p);
    },
  );
  return false;
}

// next from step 1
$("#form-personal-fill-step-1__next").on("click", () => {
  validateStep();
  const validated = validateStep1();
  if (validated) {
    tabStep1.classList.remove("form-personal-tabs__step--active");
    formStep1.classList.remove("form-personal-fill__form--active");
    tabStep2.classList.add("form-personal-tabs__step--active");
    formStep2.classList.add("form-personal-fill__form--active");
  } else showErrorPopup();

  return false;
});

// burger menu
$("#burgerBtn").on("click", function () {
  $(this).toggleClass("active");
  $(".burger-menu-b").toggleClass("active");
  return false;
});

$("a[href*=mission], a[href*=work], a[href*=apply], a[href*=getInTouch]").on(
  "click",
  function () {
    $("#burgerBtn").toggleClass("active");
    $(".burger-menu-b").removeClass("active");
    return false;
  },
);

// next from step 2
$("#form-personal-fill-step-2__next").on("click", () => {
  tabStep2.classList.remove("form-personal-tabs__step--active");
  formStep2.classList.remove("form-personal-fill__form--active");
  tabStep3.classList.add("form-personal-tabs__step--active");
  formStep3.classList.add("form-personal-fill__form--active");
  return false;
});

// next from step 3
$("#form-personal-fill-step-3__next").on("click", () => {
  tabStep3.classList.remove("form-personal-tabs__step--active");
  formStep3.classList.remove("form-personal-fill__form--active");
  tabStep4.classList.add("form-personal-tabs__step--active");
  formStep4.classList.add("form-personal-fill__form--active");
  return false;
});

// go to step 1 from menu
$("#form-personal-tabs__step-1").on("click", () => {
  if (
    formStep3.classList.contains("form-personal-fill__form--active") &&
    tabStep3.classList.contains("form-personal-tabs__step--active")
  ) {
    tabStep3.classList.remove("form-personal-tabs__step--active");
    formStep3.classList.remove("form-personal-fill__form--active");
    tabStep1.classList.add("form-personal-tabs__step--active");
    formStep1.classList.add("form-personal-fill__form--active");
  }
  if (
    formStep4.classList.contains("form-personal-fill__form--active") &&
    tabStep4.classList.contains("form-personal-tabs__step--active")
  ) {
    tabStep4.classList.remove("form-personal-tabs__step--active");
    formStep4.classList.remove("form-personal-fill__form--active");
    tabStep1.classList.add("form-personal-tabs__step--active");
    formStep1.classList.add("form-personal-fill__form--active");
  }
  if (
    formStep2.classList.contains("form-personal-fill__form--active") &&
    tabStep2.classList.contains("form-personal-tabs__step--active")
  ) {
    tabStep2.classList.remove("form-personal-tabs__step--active");
    formStep2.classList.remove("form-personal-fill__form--active");
    tabStep1.classList.add("form-personal-tabs__step--active");
    formStep1.classList.add("form-personal-fill__form--active");
  }
  return false;
});

// go to step 2 from menu
$("#form-personal-tabs__step-2").on("click", () => {
  if (
    formStep3.classList.contains("form-personal-fill__form--active") &&
    tabStep3.classList.contains("form-personal-tabs__step--active")
  ) {
    tabStep3.classList.remove("form-personal-tabs__step--active");
    formStep3.classList.remove("form-personal-fill__form--active");
    tabStep2.classList.add("form-personal-tabs__step--active");
    formStep2.classList.add("form-personal-fill__form--active");
  }
  if (
    formStep4.classList.contains("form-personal-fill__form--active") &&
    tabStep4.classList.contains("form-personal-tabs__step--active")
  ) {
    tabStep4.classList.remove("form-personal-tabs__step--active");
    formStep4.classList.remove("form-personal-fill__form--active");
    tabStep2.classList.add("form-personal-tabs__step--active");
    formStep2.classList.add("form-personal-fill__form--active");
  }
  if (
    formStep1.classList.contains("form-personal-fill__form--active") &&
    tabStep1.classList.contains("form-personal-tabs__step--active")
  ) {
    const validated = validateStep1();
    if (validated) {
      tabStep1.classList.remove("form-personal-tabs__step--active");
      formStep1.classList.remove("form-personal-fill__form--active");
      tabStep2.classList.add("form-personal-tabs__step--active");
      formStep2.classList.add("form-personal-fill__form--active");
    } else {
      validateStep();
      showErrorPopup();
    }
  }
  return false;
});

// go to step 3 from menu
$("#form-personal-tabs__step-3").on("click", () => {
  if (
    formStep2.classList.contains("form-personal-fill__form--active") &&
    tabStep2.classList.contains("form-personal-tabs__step--active")
  ) {
    tabStep2.classList.remove("form-personal-tabs__step--active");
    formStep2.classList.remove("form-personal-fill__form--active");
    tabStep3.classList.add("form-personal-tabs__step--active");
    formStep3.classList.add("form-personal-fill__form--active");
  }
  if (
    formStep4.classList.contains("form-personal-fill__form--active") &&
    tabStep4.classList.contains("form-personal-tabs__step--active")
  ) {
    tabStep4.classList.remove("form-personal-tabs__step--active");
    formStep4.classList.remove("form-personal-fill__form--active");
    tabStep3.classList.add("form-personal-tabs__step--active");
    formStep3.classList.add("form-personal-fill__form--active");
  }
  if (
    formStep1.classList.contains("form-personal-fill__form--active") &&
    tabStep1.classList.contains("form-personal-tabs__step--active")
  ) {
    const validated = validateStep1();
    if (validated) {
      tabStep1.classList.remove("form-personal-tabs__step--active");
      formStep1.classList.remove("form-personal-fill__form--active");
      tabStep3.classList.add("form-personal-tabs__step--active");
      formStep3.classList.add("form-personal-fill__form--active");
    } else {
      validateStep();
      showErrorPopup();
    }
  }
  return false;
});

// go to step 4 from menu
$("#form-personal-tabs__step-4").on("click", () => {
  if (
    formStep2.classList.contains("form-personal-fill__form--active") &&
    tabStep2.classList.contains("form-personal-tabs__step--active")
  ) {
    tabStep2.classList.remove("form-personal-tabs__step--active");
    formStep2.classList.remove("form-personal-fill__form--active");
    tabStep4.classList.add("form-personal-tabs__step--active");
    formStep4.classList.add("form-personal-fill__form--active");
  }
  if (
    formStep3.classList.contains("form-personal-fill__form--active") &&
    tabStep3.classList.contains("form-personal-tabs__step--active")
  ) {
    tabStep3.classList.remove("form-personal-tabs__step--active");
    formStep3.classList.remove("form-personal-fill__form--active");
    tabStep4.classList.add("form-personal-tabs__step--active");
    formStep4.classList.add("form-personal-fill__form--active");
  }
  if (
    formStep1.classList.contains("form-personal-fill__form--active") &&
    tabStep1.classList.contains("form-personal-tabs__step--active")
  ) {
    const validated = validateStep1();
    if (validated) {
      tabStep1.classList.remove("form-personal-tabs__step--active");
      formStep1.classList.remove("form-personal-fill__form--active");
      tabStep4.classList.add("form-personal-tabs__step--active");
      formStep4.classList.add("form-personal-fill__form--active");
    } else {
      validateStep();
      showErrorPopup();
    }
  }
  return false;
});

// add new course field
$("#form-personal-fill__add-courses-btn").on("click", () => {
  var label = document.createElement("label");
  label.classList.add("form-personal-fill__item");
  var input = document.createElement("input");
  input.classList.add("form-personal-fill__input-text");
  input.setAttribute("type", "text");
  input.setAttribute("name", "CourseTitle[]");
  // courseNumber = courseNumber + 1;
  input.setAttribute("placeholder", "Course Title");
  label.appendChild(input);
  courseTitleInput.parentElement.parentElement.insertBefore(
    label,
    coursesAddBtn,
  );

  return false;
});

//reset form
function resetForm() {
  [
    ...document.getElementsByClassName("form-personal-fill-schedule-checkbox"),
  ].forEach((item) => {
    item.firstElementChild.checked = false;
    item.classList.contains("form-personal-fill-schedule-checkbox--checked") &&
      item.classList.remove("form-personal-fill-schedule-checkbox--checked");
  });
  [
    ...document.getElementsByClassName("form-personal-fill__item-checkbox"),
  ].forEach((item) => {
    item.firstElementChild.checked = false;
    item.classList.contains("form-personal-fill__item-checkbox--checked") &&
      item.classList.remove("form-personal-fill__item-checkbox--checked");
  });
  [
    ...document.getElementsByClassName("form-personal-fill__input-text"),
  ].forEach((item) => (item.value = ""));
  [
    ...document.getElementsByClassName("form-personal-fill__item-textarea"),
  ].forEach((item) => (item.value = ""));
  [
    ...document.getElementById("course-title-input").parentElement.parentElement
      .children,
  ].forEach((item, index) => {
    console.log(item);

    if (
      index !== 0 &&
      item.classList.contains("form-personal-fill__item") &&
      item.parentElement.childElementCount > 2
    ) {
      console.log(item);
      item.parentElement.removeChild(item);
    }
  });
  if (
    formStep4.classList.contains("form-personal-fill__form--active") &&
    tabStep4.classList.contains("form-personal-tabs__step--active")
  ) {
    tabStep4.classList.remove("form-personal-tabs__step--active");
    formStep4.classList.remove("form-personal-fill__form--active");
    tabStep1.classList.add("form-personal-tabs__step--active");
    formStep1.classList.add("form-personal-fill__form--active");
  }
  return false;
}

//reset second form
function resetSecondForm() {
  [...document.getElementsByClassName("questions-b-form__item")].forEach(
    (item) => (item.firstElementChild.value = ""),
  );
  return false;
}

function showSuccessPopup() {
  document.getElementById("great-popup").classList.add("show");
}

function showErrorPopup() {
  document.getElementById("something-wrong-popup").classList.add("show");
}

$(".form-popup__btn-continue").on("click", function () {
  [...document.getElementsByClassName("form-popup")].forEach((i) => {
    if (i.classList.contains("show")) {
      i.classList.remove("show");
    }
  });
});

var url1 = lang === "de" ? "../f0rm/first-form.php" : "./f0rm/first-form.php";
var url2 = lang === "de" ? "../f0rm/second-form.php" : "./f0rm/second-form.php";

// on submit first form
$("#form-personal-fill__form").on("submit", function (e) {
  var dataString = $(this).serialize();

  $.ajax({
    type: "POST",
    url: url1,
    data: dataString,
    success: function () {
      showSuccessPopup();
      resetForm();
    },
  });

  e.preventDefault();
});

// on submit second form
$("#questions-b-form__form").on("submit", function (e) {
  validateSecondForm();

  const validated = validationSecondForm();
  if (validated) {
    var dataString = $(this).serialize();

    $.ajax({
      type: "POST",
      url: url2,
      data: dataString,
      success: function () {
        showSuccessPopup();
        resetSecondForm();
      },
    });
  }
  e.preventDefault();
});

// validate one field
function validateThis(target) {
  if (target.parentElement.classList.contains("error")) {
    var child = document.getElementById(target.id + "-error");
    target.parentElement.removeChild(child);
    target.parentElement.classList.remove("error");
  }
  if (
    target.value === "" ||
    ((target.id === "email_address" || target.id === "email") &&
      !validateEmail(target.value))
  )
    target.parentElement.classList.add("error");
  var p = document.createElement("span");
  if (lang === "de")
    p.innerHTML =
      (target.id === "email_address" || target.id === "email") &&
        target.value !== ""
        ? "Bitte eine gültige E-Mail-Adresse eingeben"
        : "Dies ist ein Pflichtfeld";
  else
    p.innerHTML =
      (target.id === "email_address" || target.id === "email") &&
        target.value !== ""
        ? "Enter a valid email"
        : "This field is required";
  p.setAttribute("id", target.id + "-error");
  if (target.parentElement.classList.contains("error"))
    target.parentElement.appendChild(p);
}

// validate each field first form
$("#form-personal-fill-step-1 input").on("input", (e) => {
  validateThis(e.target);
});

// validate each field form 2 inputs
$("#questions-b-form__item input").on("input", (e) => {
  validateThis(e.target);
});

// validate each field form 2 textarea
$("#questions-b-form__item textarea").on("input", (e) => {
  validateThis(e.target);
});

$("#back-to-the-top").on("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);

window.openModal = function () {
  $('.modal_overlay').addClass('active')
  $('.modal-wrapper').addClass('active')
  $('body').addClass('active')
}

window.closeModal = function () {
  $('.modal_overlay').removeClass('active')
  $('.modal-wrapper').removeClass('active')
  $('body').removeClass('active')
}

$('#create-school-btn').click(function(){
  openModal()
})

$('.modal_overlay').click(function() {
  closeModal()
})

$('.modal-close').click(function(){
  closeModal()
})


// login
$('.login-remember.icon').click(function(){
  $('.check-icon').toggleClass('active')
})


// login


// slider
$(document).ready(function(){
  $('.school-card-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true
  });
});


