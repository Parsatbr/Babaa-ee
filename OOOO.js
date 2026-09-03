/* =====================================================
   StudyFlow
   OOOO.js

   این فایل تمام منطق برنامه را کنترل می‌کند.
   ===================================================== */


/* =====================================================
   1. برنامه مطالعاتی
   =====================================================

   برای اضافه کردن روز جدید فقط یک شیء جدید
   به این آرایه اضافه کن.

   ساختار:

   {
       day: "شنبه",
       date: "۱۲ شهریور",
       activities: [
           {
               title: "مطالعه ریاضی",
               time: "75 دقیقه"
           }
       ]
   }

   ===================================================== */

const studyPlan = [

    {
        day: "شنبه",
        date: "۱۲ شهریور",
        activities: [
            {
                title: "مطالعه و تمرین",
                time: "۷۵ دقیقه"
            },
            {
                title: "تست و مرور",
                time: "۷۵ دقیقه"
            }
        ]
    },

    {
        day: "یکشنبه",
        date: "۱۳ شهریور",
        activities: [
            {
                title: "مطالعه درس اول",
                time: "۷۵ دقیقه"
            },
            {
                title: "مطالعه درس دوم",
                time: "۷۵ دقیقه"
            }
        ]
    },

    {
        day: "دوشنبه",
        date: "۱۴ شهریور",
        activities: [
            {
                title: "مطالعه",
                time: "۷۵ دقیقه"
            },
            {
                title: "تست",
                time: "۷۵ دقیقه"
            }
        ]
    },

    {
        day: "سه‌شنبه",
        date: "۱۵ شهریور",
        activities: [
            {
                title: "مطالعه",
                time: "۷۵ دقیقه"
            },
            {
                title: "تست",
                time: "۷۵ دقیقه"
            }
        ]
    },

    {
        day: "چهارشنبه",
        date: "۱۶ شهریور",
        activities: [
            {
                title: "مطالعه",
                time: "۷۵ دقیقه"
            },
            {
                title: "مرور",
                time: "۷۵ دقیقه"
            }
        ]
    },

    {
        day: "پنجشنبه",
        date: "۱۷ شهریور",
        activities: [
            {
                title: "مطالعه",
                time: "۷۵ دقیقه"
            },
            {
                title: "تست",
                time: "۷۵ دقیقه"
            }
        ]
    },

    {
        day: "جمعه",
        date: "۱۸ شهریور",
        activities: [
            {
                title: "مرور هفتگی",
                time: "۷۵ دقیقه"
            }
        ]
    }

];


/* =====================================================
   2. ذخیره وضعیت
   =====================================================

   localStorage باعث می‌شود اگر صفحه را ببندی،
   وضعیت تیک‌ها از بین نرود.
   ===================================================== */

const STORAGE_KEY = "studyFlowProgress";

let savedProgress =
    JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "{}"
    );


/* =====================================================
   3. عناصر HTML
   ===================================================== */

const daysContainer =
    document.getElementById("daysContainer");

const advisorDays =
    document.getElementById("advisorDays");

const totalDays =
    document.getElementById("totalDays");

const completedDays =
    document.getElementById("completedDays");

const totalStudy =
    document.getElementById("totalStudy");

const progressBar =
    document.getElementById("progressBar");

const progressPercent =
    document.getElementById("progressPercent");

const advisorProgress =
    document.getElementById("advisorProgress");

const advisorCompleted =
    document.getElementById("advisorCompleted");

const advisorTotal =
    document.getElementById("advisorTotal");

const advisorHours =
    document.getElementById("advisorHours");

const circleValue =
    document.getElementById("circleValue");

const toast =
    document.getElementById("toast");


/* =====================================================
   4. ساخت روزها
   ===================================================== */

function renderDays() {

    daysContainer.innerHTML = "";

    studyPlan.forEach((day, dayIndex) => {

        const card =
            document.createElement("article");

        card.className = "day-card";

        card.innerHTML = `

            <button
                class="day-header"
                type="button"
                aria-expanded="false"
            >

                <div class="day-number">
                    ${dayIndex + 1}
                </div>

                <div class="day-info">

                    <strong>
                        ${day.day}
                    </strong>

                    <small>
                        ${day.date}
                    </small>

                </div>

                <div class="day-status">
                    ${day.activities.length} فعالیت
                </div>

                <div class="arrow">
                   ⌄
                </div>

            </button>

            <div class="day-content">

                <div class="day-inner">

                    ${day.activities
                        .map(
                            (activity, activityIndex) =>
                                createActivity(
                                    dayIndex,
                                    activityIndex,
                                    activity
                                )
                        )
                        .join("")}

                </div>

            </div>
        `;


        /* باز و بسته شدن روز */

        const header =
            card.querySelector(".day-header");

        header.addEventListener(
            "click",
            () => {

                const isOpen =
                    card.classList.toggle("open");

                header.setAttribute(
                    "aria-expanded",
                    isOpen
                );

            }
        );


        /* جلوگیری از ایجاد لگ با event delegation */

        card.addEventListener(
            "change",
            handleActivityChange
        );


        daysContainer.appendChild(card);

    });

}


/* =====================================================
   5. ساخت فعالیت
   ===================================================== */

function createActivity(
    dayIndex,
    activityIndex,
    activity
) {

    const key =
        `${dayIndex}-${activityIndex}`;

    const checked =
        savedProgress[key] === true;

    return `

        <label class="activity">

            <input
                class="activity-check"
                type="checkbox"
                data-key="${key}"
                ${checked ? "checked" : ""}
            >

            <div class="activity-info">

                <strong>
                    ${activity.title}
                </strong>

                <small>
                    فعالیت مطالعاتی
                </small>

            </div>

            <div class="activity-time">
                ${activity.time}
            </div>

        </label>

    `;
}


/* =====================================================
   6. تغییر تیک فعالیت
   ===================================================== */

function handleActivityChange(event) {

    if (
        !event.target.classList.contains(
            "activity-check"
        )
    ) {
        return;
    }


    const key =
        event.target.dataset.key;


    savedProgress[key] =
        event.target.checked;


    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(savedProgress)
    );


    updateStatistics();

    showToast(
        event.target.checked
            ? "فعالیت انجام شد ✓"
            : "وضعیت فعالیت تغییر کرد"
    );
}


/* =====================================================
   7. محاسبه آمار
   ===================================================== */

function calculateStatistics() {

    let totalActivities = 0;

    let completedActivities = 0;

    let completedDayCount = 0;

    let studyMinutes = 0;


    studyPlan.forEach(
        (day, dayIndex) => {

            let dayCompleted = true;


            day.activities.forEach(
                (activity, activityIndex) => {

                    totalActivities++;


                    const key =
                        `${dayIndex}-${activityIndex}`;


                    if (
                        savedProgress[key]
                    ) {

                        completedActivities++;

                    } else {

                        dayCompleted = false;

                    }


                    studyMinutes +=
                        parseTime(
                            activity.time
                        );

                }
            );


            if (
                day.activities.length > 0 &&
                dayCompleted
            ) {

                completedDayCount++;

            }

        }
    );


    return {
        totalActivities,
        completedActivities,
        completedDayCount,
        studyMinutes
    };
}


/* =====================================================
   8. تبدیل زمان به دقیقه
   ===================================================== */

function parseTime(time) {

    const number =
        parseInt(
            time.replace(
                /[^0-9]/g,
                ""
            )
        );


    return isNaN(number)
        ? 0
        : number;
}


/* =====================================================
   9. به‌روزرسانی آمار
   ===================================================== */

function updateStatistics() {

    const stats =
        calculateStatistics();


    const {
        totalActivities,
        completedActivities,
        completedDayCount,
        studyMinutes
    } = stats;


    const percent =
        totalActivities === 0
            ? 0
            : Math.round(
                completedActivities /
                totalActivities *
                100
            );


    const hours =
        Math.floor(
            studyMinutes / 60
        );


    /* دانش‌آموز */

    totalDays.textContent =
        studyPlan.length;


    completedDays.textContent =
        completedDayCount;


    totalStudy.textContent =
        `${hours}h`;


    progressPercent.textContent =
        `${percent}%`;


    progressBar.style.width =
        `${percent}%`;


    /* مشاور */

    advisorProgress.textContent =
        `${percent}%`;


    advisorCompleted.textContent =
        completedDayCount;


    advisorTotal.textContent =
        studyPlan.length;


    advisorHours.textContent =
        `${hours} ساعت`;


    circleValue.style.width =
        `${percent}%`;


    renderAdvisorDays();
}


/* =====================================================
   10. گزارش روزهای مشاور
   ===================================================== */

function renderAdvisorDays() {

    advisorDays.innerHTML = "";


    studyPlan.forEach(
        (day, dayIndex) => {

            const allDone =
                day.activities.every(
                    (_, activityIndex) =>
                        savedProgress[
                            `${dayIndex}-${activityIndex}`
                        ] === true
                );


            const item =
                document.createElement("div");


            item.className =
                "advisor-day";


            item.innerHTML = `

                <div class="advisor-day-number">
                    ${dayIndex + 1}
                </div>

                <div class="advisor-day-info">

                    <strong>
                        ${day.day}
                    </strong>

                    <small>
                        ${day.date}
                    </small>

                </div>

                <div
                    class="${
                        allDone
                            ? "done"
                            : "not-done"
                    }"
                >
                    ${
                        allDone
                            ? "✓ کامل"
                            : "در حال انجام"
                    }
                </div>

            `;


            advisorDays.appendChild(item);

        }
    );
}


/* =====================================================
   11. Toast
   ===================================================== */

let toastTimer;


function showToast(message) {

    toast.querySelector("p")
        .textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            1800
        );
}


/* =====================================================
   12. تب‌های برنامه
   ===================================================== */

document
    .querySelectorAll(".tab")
    .forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                const pageName =
                    tab.dataset.page;


                document
                    .querySelectorAll(".tab")
                    .forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );


                document
                    .querySelectorAll(".page")
                    .forEach(
                        page =>
                            page.classList.remove(
                                "active"
                            )
                    );


                tab.classList.add(
                    "active"
                );


                document
                    .getElementById(pageName)
                    .classList.add(
                        "active"
                    );

            }
        );

    });


/* =====================================================
   13. دکمه ظاهر
   ===================================================== */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-mode"
        );


        themeBtn.textContent =
            document.body.classList.contains(
                "light-mode"
            )
                ? "🌙"
                : "☀";

    }
);


/* =====================================================
   14. شروع برنامه
   ===================================================== */

renderDays();

updateStatistics();