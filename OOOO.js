/* ==========================================================================
   OOOO.js
   منطق کامل «پیگیری برنامه مطالعاتی دانش‌آموز»
   شامل: داده‌های برنامه، محاسبات، ذخیره‌سازی (localStorage)،
   رندر پنل دانش‌آموز، رندر پنل مشاور و خروجی PDF
   ========================================================================== */

/* --------------------------------------------------------------------------
   1) داده‌های ثابت برنامه مطالعاتی
   نکته: این آرایه دقیقاً همان برنامه‌ای است که کاربر مشخص کرده و
   هیچ زمان/فعالیتی از آن حذف یا تغییر داده نشده است.
   type: "meal"  -> وعده غذایی (غیرقابل ثبت)
   type: "study" -> فعالیت درسی (قابل ثبت)
   -------------------------------------------------------------------------- */
const SCHEDULE = [
  { date: "12 شهریور", weekday: "پنجشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"تست فصل ۱ فیزیک ۱ + دوره فصل ۲ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"دوره فصل ۱ شیمی ۱ + تست (حداقل ۸۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"تست فصل ۱ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"الگو و دنباله حسابی، ریاضی ۱ و حسابان + تست", subject:"ریاضی ۱ و حسابان", type:"study" },
    { start:"16:10", end:"17:25", title:"هندسه ۳", subject:"هندسه ۳", type:"study" },
    { start:"17:40", end:"18:55", title:"فیزیک ۳", subject:"فیزیک ۳", type:"study" },
    { start:"19:10", end:"20:25", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"مرور و تست فیزیک ۱", subject:"فیزیک ۱", type:"study" },
  ]},
  { date: "13 شهریور", weekday: "جمعه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"تست فصل ۱ فیزیک ۱ + دوره فصل ۲ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"دوره فصل ۱ شیمی ۱ + تست (حداقل ۸۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"الگو و دنباله حسابی، ریاضی ۱ و حسابان + تست", subject:"ریاضی ۱ و حسابان", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"گسسته", subject:"گسسته", type:"study" },
    { start:"16:10", end:"17:25", title:"تست فصل ۱ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"17:40", end:"18:55", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"19:10", end:"20:25", title:"دوره و تست فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"مرور شیمی ۱ و تکمیل تست‌ها", subject:"شیمی ۱", type:"study" },
  ]},
  { date: "14 شهریور", weekday: "شنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"توان‌های گویا و عبارات جبری + تست", subject:"ریاضی (جبر)", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۲ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"تست فصل ۲ فیزیک ۱ (حداقل ۸۰ تست)", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:40", title:"تست فصل ۲ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"15:55", end:"17:10", title:"هندسه ۳", subject:"هندسه ۳", type:"study" },
    { start:"17:25", end:"18:40", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"18:55", end:"20:10", title:"دوره و تست فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تکمیل تست شیمی ۱", subject:"شیمی ۱", type:"study" },
  ]},
  { date: "15 شهریور", weekday: "یکشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"توان‌های گویا و عبارات جبری + تست", subject:"ریاضی (جبر)", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۲ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"تست فصل ۲ فیزیک ۱ (حداقل ۸۰ تست)", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:40", title:"تست فصل ۲ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"15:55", end:"17:10", title:"گسسته", subject:"گسسته", type:"study" },
    { start:"17:25", end:"18:40", title:"معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست", subject:"ریاضی (معادله)", type:"study" },
    { start:"18:55", end:"20:10", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"مرور و تست مباحث ریاضی", subject:"ریاضی (معادله)", type:"study" },
  ]},
  { date: "16 شهریور", weekday: "دوشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"توان‌های گویا و عبارات جبری + تست", subject:"ریاضی (جبر)", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۲ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:10", title:"تست فصل ۲ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"فیزیک ۳", subject:"فیزیک ۳", type:"study" },
    { start:"16:10", end:"17:25", title:"معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست", subject:"ریاضی (معادله)", type:"study" },
    { start:"17:40", end:"18:55", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"19:10", end:"20:25", title:"تست فصل ۲ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تکمیل تست‌های ریاضی", subject:"ریاضی (معادله)", type:"study" },
  ]},
  { date: "17 شهریور", weekday: "سه‌شنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"فصل ۲ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"تست فصل ۲ فیزیک ۱ (حداقل ۸۰ تست)", subject:"فیزیک ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست", subject:"ریاضی (معادله)", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:40", title:"تست فصل ۳ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"15:55", end:"17:10", title:"هندسه ۳", subject:"هندسه ۳", type:"study" },
    { start:"17:25", end:"18:40", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"18:55", end:"20:10", title:"دوره و تست فصل ۳ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"مرور شیمی ۱", subject:"شیمی ۱", type:"study" },
  ]},
  { date: "18 شهریور", weekday: "چهارشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"فصل ۲ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست", subject:"ریاضی (معادله)", type:"study" },
    { start:"12:10", end:"13:10", title:"تست فصل ۳ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"دوره و تست فصل ۳ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"16:10", end:"17:25", title:"گسسته", subject:"گسسته", type:"study" },
    { start:"17:40", end:"18:55", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"19:10", end:"20:25", title:"تکمیل تست فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تکمیل تست ریاضی", subject:"ریاضی (معادله)", type:"study" },
  ]},
  { date: "19 شهریور", weekday: "پنجشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"فصل ۲ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست", subject:"ریاضی (معادله)", type:"study" },
    { start:"12:10", end:"13:25", title:"دوره و تست فصل ۳ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"تست فصل ۴ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"16:10", end:"17:25", title:"تست فصل ۴ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"17:40", end:"18:55", title:"فیزیک ۳", subject:"فیزیک ۳", type:"study" },
    { start:"19:10", end:"20:25", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"مرور فیزیک ۱", subject:"فیزیک ۱", type:"study" },
  ]},
  { date: "20 شهریور", weekday: "جمعه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"فصل ۲ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست", subject:"ریاضی (معادله)", type:"study" },
    { start:"12:10", end:"13:25", title:"تکمیلی فصل‌های ۳ و ۴ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"تکمیلی فصل‌های ۳ و ۴ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"16:10", end:"17:25", title:"هندسه ۳", subject:"هندسه ۳", type:"study" },
    { start:"17:40", end:"18:55", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"19:10", end:"20:25", title:"دوره و تست فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تکمیل تست هندسه ۱", subject:"هندسه ۱", type:"study" },
  ]},
  { date: "21 شهریور", weekday: "شنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"مثلثات دهم و یازدهم + تست (حداقل ۱۵۰ تست)", subject:"مثلثات", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۳ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"فصل ۴ فیزیک ۱ + تست (حداقل ۵۰ تست)", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"دوره و تست فصل ۱ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"16:10", end:"17:25", title:"گسسته", subject:"گسسته", type:"study" },
    { start:"17:40", end:"18:55", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"19:10", end:"20:25", title:"مثلثات + تست", subject:"مثلثات", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تکمیل تست شیمی ۱", subject:"شیمی ۱", type:"study" },
  ]},
  { date: "22 شهریور", weekday: "یکشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"مثلثات دهم و یازدهم + تست", subject:"مثلثات", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۳ شیمی ۱ + تست", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"فصل ۴ فیزیک ۱ + تست", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"دوره و تست فصل ۱ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"16:10", end:"17:25", title:"فیزیک ۳", subject:"فیزیک ۳", type:"study" },
    { start:"17:40", end:"18:55", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"19:10", end:"20:25", title:"مثلثات + تست", subject:"مثلثات", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"مرور فصل ۳ شیمی ۱", subject:"شیمی ۱", type:"study" },
  ]},
  { date: "23 شهریور", weekday: "دوشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"مثلثات دهم و یازدهم + تست", subject:"مثلثات", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۳ شیمی ۱ + تست", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"فصل ۴ فیزیک ۱ + تست", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"دوره و تست فصل ۱ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"16:10", end:"17:25", title:"هندسه ۳", subject:"هندسه ۳", type:"study" },
    { start:"17:40", end:"18:55", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"19:10", end:"20:25", title:"مثلثات + تست", subject:"مثلثات", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تکمیل تست فیزیک ۱", subject:"فیزیک ۱", type:"study" },
  ]},
  { date: "24 شهریور", weekday: "سه‌شنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"مثلثات دهم و یازدهم + تست", subject:"مثلثات", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۳ شیمی ۱ + تست", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"فصل ۴ فیزیک ۱ + تست", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"دوره فصل ۲ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"16:10", end:"17:25", title:"گسسته", subject:"گسسته", type:"study" },
    { start:"17:40", end:"18:55", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"19:10", end:"20:25", title:"مثلثات + تست", subject:"مثلثات", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"مرور هندسه ۲", subject:"هندسه ۲", type:"study" },
  ]},
  { date: "25 شهریور", weekday: "چهارشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"مثلثات دهم و یازدهم + تست", subject:"مثلثات", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۳ شیمی ۱ + تست", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"دوره فصل ۵ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"دوره فصل ۲ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"16:10", end:"17:25", title:"فیزیک ۳", subject:"فیزیک ۳", type:"study" },
    { start:"17:40", end:"18:55", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"19:10", end:"20:25", title:"مثلثات + تست", subject:"مثلثات", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تکمیل تست شیمی ۱", subject:"شیمی ۱", type:"study" },
  ]},
  { date: "26 شهریور", weekday: "پنجشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"مثلثات دهم و یازدهم + تست", subject:"مثلثات", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۳ شیمی ۱ + تست", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"دوره فصل ۵ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"دوره و تست فصل ۳ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"16:10", end:"17:25", title:"دوره و تست فصل ۳ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"17:40", end:"18:55", title:"هندسه ۳", subject:"هندسه ۳", type:"study" },
    { start:"19:10", end:"20:25", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"مرور فیزیک ۱", subject:"فیزیک ۱", type:"study" },
  ]},
  { date: "27 شهریور", weekday: "جمعه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"مثلثات دهم و یازدهم + تست", subject:"مثلثات", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۳ شیمی ۱ + تست", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"تکمیلی تستی فصل‌های ۲ و ۳ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"تکمیلی تستی فصل‌های ۲ و ۳ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"16:10", end:"17:25", title:"گسسته", subject:"گسسته", type:"study" },
    { start:"17:40", end:"18:55", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"19:10", end:"20:25", title:"دوره فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تکمیل تست هندسه ۲", subject:"هندسه ۲", type:"study" },
  ]},
  { date: "28 شهریور", weekday: "شنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"تابع دهم و یازدهم + نمایی و لگاریتمی + تست", subject:"تابع", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۱ شیمی ۲ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۲", type:"study" },
    { start:"12:10", end:"13:25", title:"تست فصل ۵ فیزیک ۱ / تکمیل تست فصل ۴", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"فصل ۱ آمار و احتمال + تست", subject:"آمار و احتمال", type:"study" },
    { start:"16:10", end:"17:25", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"17:40", end:"18:55", title:"فیزیک ۳", subject:"فیزیک ۳", type:"study" },
    { start:"19:10", end:"20:25", title:"تابع + تست", subject:"تابع", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تکمیل تست شیمی ۲", subject:"شیمی ۲", type:"study" },
  ]},
  { date: "29 شهریور", weekday: "یکشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"تابع دهم و یازدهم + نمایی و لگاریتمی + تست", subject:"تابع", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۱ شیمی ۲ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۲", type:"study" },
    { start:"12:10", end:"13:25", title:"تست فصل ۵ فیزیک ۱ / تکمیل تست فصل ۴", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"احتمال + تست (بخش اول)", subject:"آمار و احتمال", type:"study" },
    { start:"16:10", end:"17:25", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"17:40", end:"18:55", title:"هندسه ۳", subject:"هندسه ۳", type:"study" },
    { start:"19:10", end:"20:25", title:"تابع + تست", subject:"تابع", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تکمیل تست شیمی ۲", subject:"شیمی ۲", type:"study" },
  ]},
  { date: "30 شهریور", weekday: "دوشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"تابع دهم و یازدهم + نمایی و لگاریتمی + تست", subject:"تابع", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۱ شیمی ۲ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۲", type:"study" },
    { start:"12:10", end:"13:25", title:"تکمیل تست فصل‌های ۲، ۴ و ۵ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"تکمیلی آمار و احتمال", subject:"آمار و احتمال", type:"study" },
    { start:"16:10", end:"17:25", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"17:40", end:"18:55", title:"گسسته", subject:"گسسته", type:"study" },
    { start:"19:10", end:"20:25", title:"تابع + تست", subject:"تابع", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"مرور فیزیک ۱", subject:"فیزیک ۱", type:"study" },
  ]},
  { date: "31 شهریور", weekday: "سه‌شنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"تابع دهم و یازدهم + نمایی و لگاریتمی + تست", subject:"تابع", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۱ شیمی ۲ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۲", type:"study" },
    { start:"12:10", end:"13:25", title:"تکمیل تست فصل‌های ۲، ۴ و ۵ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"احتمال + تست", subject:"آمار و احتمال", type:"study" },
    { start:"16:10", end:"17:25", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
    { start:"17:40", end:"18:55", title:"فیزیک ۳", subject:"فیزیک ۳", type:"study" },
    { start:"19:10", end:"20:25", title:"هندسه ۳ + تست", subject:"هندسه ۳", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"جمع‌بندی و تست ترکیبی", subject:"جمع‌بندی", type:"study" },
  ]},
];

/* --------------------------------------------------------------------------
   2) کمک‌تابع‌های پایه: تبدیل اعداد به فارسی، محاسبه مدت زمان، ساخت شناسه
   -------------------------------------------------------------------------- */

// تبدیل ارقام لاتین به ارقام فارسی برای نمایش زیبا در رابط کاربری
const FA_DIGITS = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
function toFaDigits(input) {
  return String(input).replace(/[0-9]/g, (d) => FA_DIGITS[Number(d)]);
}

// محاسبه مدت زمان برنامه‌ریزی‌شده یک فعالیت بر حسب دقیقه، از روی start/end
function plannedMinutes(activity) {
  const [sh, sm] = activity.start.split(":").map(Number);
  const [eh, em] = activity.end.split(":").map(Number);
  return (eh * 60 + em) - (sh * 60 + sm);
}

// شناسه یکتا برای هر فعالیت: بر اساس اندیس روز و اندیس فعالیت
// (پایدار در هر بار بارگذاری صفحه، چون بر پایه آرایه ثابت SCHEDULE است)
function activityId(dayIndex, actIndex) {
  return `day${dayIndex}_act${actIndex}`;
}

/* --------------------------------------------------------------------------
   3) لایه ذخیره‌سازی (localStorage)
   ساختار ذخیره: یک آبجکت با کلید شناسه فعالیت و مقدار رکورد ثبت‌شده:
   {
     "day0_act1": {
        status: "done" | "skipped",
        studyMinutes: 60,
        testCount: 80,
        percent: 80,
        recordedAt: "ISO date string"
     }, ...
   }
   -------------------------------------------------------------------------- */
const STORAGE_KEY = "studyTrackerRecords_v1";

function loadRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("خطا در خواندن اطلاعات ذخیره‌شده:", e);
    return {};
  }
}

function saveRecords(records) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (e) {
    console.error("خطا در ذخیره‌سازی اطلاعات:", e);
  }
}

// حافظه در حال اجرا؛ همیشه با storage همگام نگه داشته می‌شود
let RECORDS = loadRecords();

/* --------------------------------------------------------------------------
   4) محاسبات آماری
   -------------------------------------------------------------------------- */

// همه فعالیت‌های درسی (غیر از وعده‌های غذایی) را با متادیتای روز برمی‌گرداند
function allStudyActivities() {
  const list = [];
  SCHEDULE.forEach((day, dIdx) => {
    day.activities.forEach((act, aIdx) => {
      if (act.type === "study") {
        list.push({ ...act, id: activityId(dIdx, aIdx), dayIndex: dIdx, date: day.date, weekday: day.weekday, planned: plannedMinutes(act) });
      }
    });
  });
  return list;
}

// خلاصه آماری کلی برنامه (برای داشبورد دانش‌آموز و گزارش کلی مشاور)
function computeOverallStats() {
  const all = allStudyActivities();
  let totalPlanned = 0, totalStudied = 0, totalTests = 0;
  let doneCount = 0, skippedCount = 0, unrecordedCount = 0;

  all.forEach((act) => {
    totalPlanned += act.planned;
    const rec = RECORDS[act.id];
    if (!rec) {
      unrecordedCount++;
    } else if (rec.status === "done") {
      doneCount++;
      totalStudied += rec.studyMinutes || 0;
      totalTests += rec.testCount || 0;
    } else if (rec.status === "skipped") {
      skippedCount++;
    }
  });

  const overallPercent = totalPlanned > 0 ? Math.min(100, Math.round((totalStudied / totalPlanned) * 100)) : 0;

  return { totalPlanned, totalStudied, totalTests, doneCount, skippedCount, unrecordedCount, overallPercent, totalActivities: all.length };
}

// خلاصه آمار «امروز» (آخرین روزی که حداقل یک ثبت در آن انجام شده؛
// در غیر این صورت اولین روز برنامه به عنوان روز جاری نمایش داده می‌شود)
function computeTodayStats() {
  const all = allStudyActivities();
  // تشخیص «امروز»: جدیدترین روزی که رکورد ثبت‌شده دارد؛ وگرنه روز اول
  let todayIndex = 0;
  let latestTime = 0;
  all.forEach((act) => {
    const rec = RECORDS[act.id];
    if (rec && rec.recordedAt) {
      const t = new Date(rec.recordedAt).getTime();
      if (t >= latestTime) { latestTime = t; todayIndex = act.dayIndex; }
    }
  });

  const dayActs = all.filter((a) => a.dayIndex === todayIndex);
  let studied = 0, tests = 0, done = 0, skipped = 0, planned = 0;
  dayActs.forEach((act) => {
    planned += act.planned;
    const rec = RECORDS[act.id];
    if (rec && rec.status === "done") {
      done++; studied += rec.studyMinutes || 0; tests += rec.testCount || 0;
    } else if (rec && rec.status === "skipped") {
      skipped++;
    }
  });
  const percent = planned > 0 ? Math.min(100, Math.round((studied / planned) * 100)) : 0;
  return { dayIndex: todayIndex, date: SCHEDULE[todayIndex].date, weekday: SCHEDULE[todayIndex].weekday, studied, tests, done, skipped, percent, totalActs: dayActs.length };
}

// گزارش روزانه کامل (برای پنل مشاور)
function computeDailyReports() {
  return SCHEDULE.map((day, dIdx) => {
    const studyActs = day.activities.filter((a) => a.type === "study");
    let planned = 0, studied = 0, tests = 0, done = 0, skipped = 0, unrecorded = 0;
    studyActs.forEach((act, i) => {
      const aIdx = day.activities.indexOf(act);
      const id = activityId(dIdx, aIdx);
      planned += plannedMinutes(act);
      const rec = RECORDS[id];
      if (!rec) { unrecorded++; }
      else if (rec.status === "done") { done++; studied += rec.studyMinutes || 0; tests += rec.testCount || 0; }
      else if (rec.status === "skipped") { skipped++; }
    });
    const percent = planned > 0 ? Math.min(100, Math.round((studied / planned) * 100)) : 0;
    return { date: day.date, weekday: day.weekday, planned, studied, tests, percent, done, skipped, unrecorded, total: studyActs.length };
  });
}

// گزارش درسی: تجمیع بر اساس نام درس (subject)
function computeSubjectReports() {
  const all = allStudyActivities();
  const map = {};
  all.forEach((act) => {
    if (!map[act.subject]) {
      map[act.subject] = { subject: act.subject, planned: 0, studied: 0, tests: 0, done: 0, skipped: 0, unrecorded: 0, total: 0 };
    }
    const s = map[act.subject];
    s.total++;
    s.planned += act.planned;
    const rec = RECORDS[act.id];
    if (!rec) { s.unrecorded++; }
    else if (rec.status === "done") { s.done++; s.studied += rec.studyMinutes || 0; s.tests += rec.testCount || 0; }
    else if (rec.status === "skipped") { s.skipped++; }
  });
  return Object.values(map).map((s) => ({ ...s, percent: s.planned > 0 ? Math.min(100, Math.round((s.studied / s.planned) * 100)) : 0 }));
}

/* --------------------------------------------------------------------------
   5) رندر پنل دانش‌آموز: آکاردئون روزها + کارت‌های فعالیت
   -------------------------------------------------------------------------- */

// وضعیت باز/بسته بودن آکاردئون هر روز (فقط در حافظه؛ نیازی به ذخیره‌سازی نیست)
const openDays = new Set();

function renderStudentPanel() {
  const container = document.getElementById("daysContainer");
  container.innerHTML = "";

  SCHEDULE.forEach((day, dIdx) => {
    const dayCard = document.createElement("div");
    dayCard.className = "day-card glass";

    const dayStats = dailyQuickStats(dIdx);

    const header = document.createElement("button");
    header.className = "day-header";
    header.setAttribute("type", "button");
    header.setAttribute("aria-expanded", openDays.has(dIdx) ? "true" : "false");
    header.innerHTML = `
      <div class="day-header-main">
        <span class="day-title">${day.weekday} ${toFaDigits(day.date)}</span>
        <span class="day-sub">${toFaDigits(dayStats.done)} از ${toFaDigits(dayStats.total)} فعالیت ثبت شده</span>
      </div>
      <div class="day-header-side">
        <span class="mini-percent ${percentClass(dayStats.percent)}">${toFaDigits(dayStats.percent)}٪</span>
        <span class="chevron">⌄</span>
      </div>
    `;

    const body = document.createElement("div");
    body.className = "day-body";
    if (openDays.has(dIdx)) body.classList.add("open");

    day.activities.forEach((act, aIdx) => {
      body.appendChild(renderActivityCard(day, dIdx, act, aIdx));
    });

    header.addEventListener("click", () => {
      const isOpen = body.classList.toggle("open");
      header.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (isOpen) openDays.add(dIdx); else openDays.delete(dIdx);
    });

    dayCard.appendChild(header);
    dayCard.appendChild(body);
    container.appendChild(dayCard);
  });
}

function dailyQuickStats(dIdx) {
  const day = SCHEDULE[dIdx];
  const studyActs = day.activities.filter((a) => a.type === "study");
  let done = 0, studied = 0, planned = 0;
  studyActs.forEach((act) => {
    const aIdx = day.activities.indexOf(act);
    const id = activityId(dIdx, aIdx);
    planned += plannedMinutes(act);
    const rec = RECORDS[id];
    if (rec && rec.status === "done") { done++; studied += rec.studyMinutes || 0; }
  });
  const percent = planned > 0 ? Math.min(100, Math.round((studied / planned) * 100)) : 0;
  return { done, total: studyActs.length, percent };
}

function percentClass(p) {
  if (p >= 80) return "pct-good";
  if (p >= 40) return "pct-mid";
  return "pct-low";
}

function renderActivityCard(day, dIdx, act, aIdx) {
  const card = document.createElement("div");

  if (act.type === "meal") {
    card.className = "activity-card meal-card";
    card.innerHTML = `
      <div class="activity-time">${toFaDigits(act.start)} - ${toFaDigits(act.end)}</div>
      <div class="activity-main">
        <span class="meal-icon">🍽️</span>
        <span class="activity-title">${act.title}</span>
      </div>
    `;
    return card;
  }

  const id = activityId(dIdx, aIdx);
  const rec = RECORDS[id];
  const planned = plannedMinutes(act);

  let statusBadge = `<span class="status-badge status-none">ثبت‌نشده</span>`;
  let progressHtml = "";
  if (rec && rec.status === "done") {
    statusBadge = `<span class="status-badge status-done">خواندم</span>`;
    progressHtml = `
      <div class="progress-wrap">
        <div class="progress-bar-track">
          <div class="progress-bar-fill ${percentClass(rec.percent)}" style="width:${rec.percent}%"></div>
        </div>
        <span class="progress-label ${percentClass(rec.percent)}">${toFaDigits(rec.percent)}٪</span>
      </div>
      <div class="activity-detail-row">
        <span>مدت مطالعه: ${toFaDigits(rec.studyMinutes)} دقیقه</span>
        <span>تعداد تست: ${toFaDigits(rec.testCount)}</span>
      </div>
    `;
  } else if (rec && rec.status === "skipped") {
    statusBadge = `<span class="status-badge status-skip">نخواندم</span>`;
  }

  card.className = "activity-card study-card";
  card.innerHTML = `
    <div class="activity-time">${toFaDigits(act.start)} - ${toFaDigits(act.end)}
      <span class="planned-min">(${toFaDigits(planned)} دقیقه برنامه)</span>
    </div>
    <div class="activity-main">
      <div class="activity-text">
        <span class="activity-subject">${act.subject}</span>
        <span class="activity-title">${act.title}</span>
      </div>
      ${statusBadge}
    </div>
    ${progressHtml}
    <button class="record-btn" type="button">ثبت</button>
  `;

  card.querySelector(".record-btn").addEventListener("click", () => openRecordModal(id, act, day));
  return card;
}

/* --------------------------------------------------------------------------
   6) مودال ثبت وضعیت فعالیت
   -------------------------------------------------------------------------- */

function openRecordModal(recId, act, day) {
  const modal = document.getElementById("recordModal");
  const modalTitle = document.getElementById("modalActivityTitle");
  const modalMeta = document.getElementById("modalActivityMeta");
  const choiceStep = document.getElementById("modalChoiceStep");
  const formStep = document.getElementById("modalFormStep");

  modalTitle.textContent = act.title;
  modalMeta.textContent = `${day.weekday} ${toFaDigits(day.date)} — ${act.subject} — ${toFaDigits(act.start)} تا ${toFaDigits(act.end)}`;

  choiceStep.classList.remove("hidden");
  formStep.classList.add("hidden");
  document.getElementById("studyMinutesInput").value = "";
  document.getElementById("testCountInput").value = "";

  modal.classList.add("open");

  const planned = plannedMinutes(act);

  document.getElementById("btnSkipped").onclick = () => {
    RECORDS[recId] = { status: "skipped", recordedAt: new Date().toISOString() };
    saveRecords(RECORDS);
    closeModal();
    renderStudentPanel();
    renderDashboard();
  };

  document.getElementById("btnDone").onclick = () => {
    choiceStep.classList.add("hidden");
    formStep.classList.remove("hidden");
  };

  document.getElementById("confirmDoneBtn").onclick = () => {
    const minutesRaw = document.getElementById("studyMinutesInput").value;
    const testsRaw = document.getElementById("testCountInput").value;
    const minutes = Math.max(0, Number(minutesRaw));
    const tests = Math.max(0, Number(testsRaw));

    if (minutesRaw === "" || isNaN(minutes)) {
      document.getElementById("modalFormError").textContent = "لطفاً مدت مطالعه را به دقیقه وارد کنید.";
      return;
    }
    if (testsRaw === "" || isNaN(tests)) {
      document.getElementById("modalFormError").textContent = "لطفاً تعداد تست را وارد کنید (در صورت نبود تست، عدد ۰).";
      return;
    }
    document.getElementById("modalFormError").textContent = "";

    const percent = planned > 0 ? Math.min(100, Math.round((minutes / planned) * 100)) : 0;
    RECORDS[recId] = {
      status: "done",
      studyMinutes: minutes,
      testCount: tests,
      percent,
      recordedAt: new Date().toISOString(),
    };
    saveRecords(RECORDS);
    closeModal();
    renderStudentPanel();
    renderDashboard();
  };
}

function closeModal() {
  document.getElementById("recordModal").classList.remove("open");
}

/* --------------------------------------------------------------------------
   7) داشبورد پیشرفت دانش‌آموز
   -------------------------------------------------------------------------- */

function renderDashboard() {
  const overall = computeOverallStats();
  const today = computeTodayStats();

  const grid = document.getElementById("dashboardGrid");
  grid.innerHTML = `
    <div class="stat-card glass">
      <span class="stat-label">پیشرفت امروز</span>
      <span class="stat-value ${percentClass(today.percent)}">${toFaDigits(today.percent)}٪</span>
      <span class="stat-foot">${today.weekday} ${toFaDigits(today.date)}</span>
    </div>
    <div class="stat-card glass">
      <span class="stat-label">مدت مطالعه امروز</span>
      <span class="stat-value">${toFaDigits(today.studied)}</span>
      <span class="stat-foot">دقیقه</span>
    </div>
    <div class="stat-card glass">
      <span class="stat-label">تعداد تست امروز</span>
      <span class="stat-value">${toFaDigits(today.tests)}</span>
      <span class="stat-foot">تست</span>
    </div>
    <div class="stat-card glass">
      <span class="stat-label">فعالیت‌های انجام‌شده</span>
      <span class="stat-value">${toFaDigits(overall.doneCount)}</span>
      <span class="stat-foot">از ${toFaDigits(overall.totalActivities)} فعالیت</span>
    </div>
    <div class="stat-card glass">
      <span class="stat-label">فعالیت‌های نخوانده</span>
      <span class="stat-value pct-low">${toFaDigits(overall.skippedCount)}</span>
      <span class="stat-foot">فعالیت</span>
    </div>
    <div class="stat-card glass wide">
      <span class="stat-label">درصد مطالعه کل برنامه</span>
      <div class="progress-bar-track lg">
        <div class="progress-bar-fill ${percentClass(overall.overallPercent)}" style="width:${overall.overallPercent}%"></div>
      </div>
      <span class="stat-foot">${toFaDigits(overall.overallPercent)}٪ از ${toFaDigits(overall.totalPlanned)} دقیقه برنامه‌ریزی‌شده</span>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   8) پنل مشاور: گزارش کلی + گزارش روزانه + گزارش درسی
   -------------------------------------------------------------------------- */

function renderAdvisorPanel() {
  const overall = computeOverallStats();
  const daily = computeDailyReports();
  const subjects = computeSubjectReports();

  // گزارش کلی
  document.getElementById("advisorOverallGrid").innerHTML = `
    <div class="stat-card glass"><span class="stat-label">کل مدت برنامه‌ریزی‌شده</span><span class="stat-value">${toFaDigits(overall.totalPlanned)}</span><span class="stat-foot">دقیقه</span></div>
    <div class="stat-card glass"><span class="stat-label">کل مدت مطالعه واقعی</span><span class="stat-value">${toFaDigits(overall.totalStudied)}</span><span class="stat-foot">دقیقه</span></div>
    <div class="stat-card glass"><span class="stat-label">درصد کلی مطالعه</span><span class="stat-value ${percentClass(overall.overallPercent)}">${toFaDigits(overall.overallPercent)}٪</span></div>
    <div class="stat-card glass"><span class="stat-label">کل تعداد تست</span><span class="stat-value">${toFaDigits(overall.totalTests)}</span></div>
    <div class="stat-card glass"><span class="stat-label">فعالیت‌های خوانده‌شده</span><span class="stat-value status-good-text">${toFaDigits(overall.doneCount)}</span></div>
    <div class="stat-card glass"><span class="stat-label">فعالیت‌های نخوانده</span><span class="stat-value status-bad-text">${toFaDigits(overall.skippedCount)}</span></div>
    <div class="stat-card glass"><span class="stat-label">فعالیت‌های ثبت‌نشده</span><span class="stat-value">${toFaDigits(overall.unrecordedCount)}</span></div>
  `;

  // گزارش روزانه
  const dailyBody = document.getElementById("dailyReportBody");
  dailyBody.innerHTML = daily.map((d) => `
    <tr>
      <td>${d.weekday} ${toFaDigits(d.date)}</td>
      <td>${toFaDigits(d.planned)}</td>
      <td>${toFaDigits(d.studied)}</td>
      <td><span class="table-pct ${percentClass(d.percent)}">${toFaDigits(d.percent)}٪</span></td>
      <td>${toFaDigits(d.tests)}</td>
      <td>${toFaDigits(d.done)}</td>
      <td>${toFaDigits(d.skipped)}</td>
    </tr>
  `).join("");

  // گزارش درسی
  const subjectBody = document.getElementById("subjectReportBody");
  subjectBody.innerHTML = subjects.map((s) => `
    <tr>
      <td>${s.subject}</td>
      <td>${toFaDigits(s.planned)}</td>
      <td>${toFaDigits(s.studied)}</td>
      <td><span class="table-pct ${percentClass(s.percent)}">${toFaDigits(s.percent)}٪</span></td>
      <td>${toFaDigits(s.tests)}</td>
      <td>${toFaDigits(s.done)}</td>
      <td>${toFaDigits(s.skipped)}</td>
    </tr>
  `).join("");
}

/* --------------------------------------------------------------------------
   9) جابه‌جایی بین «پنل دانش‌آموز» و «پنل مشاور»
   -------------------------------------------------------------------------- */

function switchTab(tabName) {
  document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === tabName));
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.toggle("active", panel.id === `panel-${tabName}`));
  if (tabName === "advisor") renderAdvisorPanel();
}

/* --------------------------------------------------------------------------
   10) خروجی PDF برای مشاور
   -------------------------------------------------------------------------------
   نکته فنی: کتابخانه‌های jsPDF و html2canvas (که در Omg.html و با نام «Palang»
   بارگذاری شده‌اند) استفاده می‌شوند. چون این دو کتابخانه به‌صورت داخلی از فونت
   لاتین استفاده می‌کنند و متن فارسی/راست‌به‌چپ را درست رندر نمی‌کنند، به جای
   نوشتن مستقیم متن در PDF، ابتدا گزارش را به شکل HTML با همان تم نئونی سایت
   می‌سازیم، سپس با html2canvas آن را به تصویر تبدیل کرده و تصویر را داخل
   صفحات PDF قرار می‌دهیم. به این ترتیب فونت فارسی، جهت راست‌به‌چپ و ظاهر
   نئونی سایت دقیقاً همان چیزی می‌شود که در PDF نهایی دیده می‌شود.
   -------------------------------------------------------------------------- */

async function exportAdvisorPdf() {
  const btn = document.getElementById("exportPdfBtn");
  const originalLabel = btn.textContent;
  btn.disabled = true;
  btn.textContent = "در حال ساخت PDF...";

  try {
    const overall = computeOverallStats();
    const daily = computeDailyReports();
    const subjects = computeSubjectReports();
    const todayStr = new Date().toLocaleDateString("fa-IR");

    // ساخت کانتینر مخفی برای رندر صفحات گزارش (خارج از دید کاربر)
    const printRoot = document.getElementById("pdfRenderRoot");
    printRoot.innerHTML = "";

    // ---- صفحه ۱: عنوان + خلاصه آماری ----
    const page1 = document.createElement("div");
    page1.className = "pdf-page";
    page1.innerHTML = `
      <div class="pdf-header">
        <h1>گزارش پیشرفت مطالعاتی</h1>
        <p class="pdf-sub">تاریخ تهیه گزارش: ${todayStr}</p>
      </div>
      <div class="pdf-stats-grid">
        <div class="pdf-stat"><span>کل مدت برنامه‌ریزی‌شده</span><b>${toFaDigits(overall.totalPlanned)} دقیقه</b></div>
        <div class="pdf-stat"><span>کل مدت مطالعه واقعی</span><b>${toFaDigits(overall.totalStudied)} دقیقه</b></div>
        <div class="pdf-stat"><span>درصد کلی مطالعه</span><b>${toFaDigits(overall.overallPercent)}٪</b></div>
        <div class="pdf-stat"><span>کل تعداد تست</span><b>${toFaDigits(overall.totalTests)}</b></div>
        <div class="pdf-stat"><span>فعالیت‌های خوانده‌شده</span><b>${toFaDigits(overall.doneCount)}</b></div>
        <div class="pdf-stat"><span>فعالیت‌های نخوانده</span><b>${toFaDigits(overall.skippedCount)}</b></div>
        <div class="pdf-stat"><span>فعالیت‌های ثبت‌نشده</span><b>${toFaDigits(overall.unrecordedCount)}</b></div>
      </div>
      <div class="pdf-progress-block">
        <span>درصد کلی مطالعه برنامه</span>
        <div class="pdf-progress-track"><div class="pdf-progress-fill" style="width:${overall.overallPercent}%"></div></div>
      </div>
    `;

    // ---- صفحه ۲: گزارش روزانه ----
    const page2 = document.createElement("div");
    page2.className = "pdf-page";
    page2.innerHTML = `
      <h2 class="pdf-section-title">گزارش روزانه</h2>
      <table class="pdf-table">
        <thead><tr><th>روز</th><th>برنامه (د)</th><th>مطالعه (د)</th><th>درصد</th><th>تست</th><th>انجام</th><th>نخوانده</th></tr></thead>
        <tbody>
          ${daily.map((d) => `<tr>
            <td>${d.weekday} ${toFaDigits(d.date)}</td>
            <td>${toFaDigits(d.planned)}</td>
            <td>${toFaDigits(d.studied)}</td>
            <td>${toFaDigits(d.percent)}٪</td>
            <td>${toFaDigits(d.tests)}</td>
            <td>${toFaDigits(d.done)}</td>
            <td>${toFaDigits(d.skipped)}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    `;

    // ---- صفحه ۳: گزارش درسی ----
    const page3 = document.createElement("div");
    page3.className = "pdf-page";
    page3.innerHTML = `
      <h2 class="pdf-section-title">گزارش درسی</h2>
      <table class="pdf-table">
        <thead><tr><th>درس</th><th>برنامه (د)</th><th>مطالعه (د)</th><th>درصد</th><th>تست</th><th>انجام</th><th>نخوانده</th></tr></thead>
        <tbody>
          ${subjects.map((s) => `<tr>
            <td>${s.subject}</td>
            <td>${toFaDigits(s.planned)}</td>
            <td>${toFaDigits(s.studied)}</td>
            <td>${toFaDigits(s.percent)}٪</td>
            <td>${toFaDigits(s.tests)}</td>
            <td>${toFaDigits(s.done)}</td>
            <td>${toFaDigits(s.skipped)}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    `;

    printRoot.appendChild(page1);
    printRoot.appendChild(page2);
    printRoot.appendChild(page3);

    // بررسی در دسترس بودن کتابخانه‌های خارجی (Palang)
    if (typeof html2canvas === "undefined" || typeof window.jspdf === "undefined") {
      alert("برای ساخت PDF نیاز به اتصال اینترنت است (بارگذاری کتابخانه‌های Palang). لطفاً اتصال خود را بررسی کنید.");
      btn.disabled = false;
      btn.textContent = originalLabel;
      return;
    }

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const pages = printRoot.querySelectorAll(".pdf-page");
    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], { scale: 2, backgroundColor: "#0b0e17" });
      const imgData = canvas.toDataURL("image/png");
      const imgHeight = (canvas.height * pageWidth) / canvas.width;
      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, Math.min(imgHeight, pageHeight));
    }

    pdf.save("گزارش-برنامه-مطالعاتی.pdf");
    printRoot.innerHTML = "";
  } catch (err) {
    console.error("خطا در ساخت PDF:", err);
    alert("متأسفانه ساخت PDF با خطا مواجه شد.");
  } finally {
    btn.disabled = false;
    btn.textContent = originalLabel;
  }
}

/* --------------------------------------------------------------------------
   11) راه‌اندازی اولیه برنامه
   -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderStudentPanel();
  renderDashboard();

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  document.getElementById("recordModal").addEventListener("click", (e) => {
    if (e.target.id === "recordModal") closeModal();
  });

  document.getElementById("exportPdfBtn").addEventListener("click", exportAdvisorPdf);
});
/* =========================================================
   اصلاحات جدید:
   1. فعال کردن کشویی روزهای پنل دانش‌آموز
   2. گزارش کامل روزبه‌روز مشاور
   ========================================================= */


/* ---------------------------------------------------------
   تبدیل دقیقه به نمایش مناسب
   بیشتر از 180 دقیقه -> ساعت
--------------------------------------------------------- */

function formatAdvisorTime(minutes) {

    minutes = Number(minutes) || 0;

    if (minutes > 180) {

        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;

        if (mins === 0) {
            return `${hours} ساعت`;
        }

        return `${hours} ساعت و ${mins} دقیقه`;
    }

    return `${minutes} دقیقه`;
}


/* ---------------------------------------------------------
   محاسبه مدت یک فعالیت
--------------------------------------------------------- */

function advisorActivityMinutes(activity) {

    if (!activity || !activity.start || !activity.end) {
        return 0;
    }

    const [sh, sm] = activity.start.split(":").map(Number);
    const [eh, em] = activity.end.split(":").map(Number);

    return ((eh * 60 + em) - (sh * 60 + sm));
}


/* ---------------------------------------------------------
   پیدا کردن رکورد فعالیت
   از ساختار فعلی RECORDS استفاده می‌کند
--------------------------------------------------------- */

function advisorGetRecord(dayIndex, activityIndex) {

    const id = `day-${dayIndex}-activity-${activityIndex}`;

    if (typeof RECORDS !== "undefined" && RECORDS[id]) {
        return RECORDS[id];
    }

    return {};
}


/* ---------------------------------------------------------
   مدت مطالعه ثبت‌شده
--------------------------------------------------------- */

function advisorStudiedMinutes(record) {

    if (!record) return 0;

    return Number(
        record.studyMinutes ??
        record.studiedMinutes ??
        record.minutes ??
        record.duration ??
        record.time ??
        0
    ) || 0;
}


/* ---------------------------------------------------------
   تعداد تست
--------------------------------------------------------- */

function advisorTests(record) {

    if (!record) return 0;

    return Number(
        record.tests ??
        record.testCount ??
        record.test ??
        0
    ) || 0;
}


/* ---------------------------------------------------------
   درصد تکمیل
--------------------------------------------------------- */

function advisorPercent(studied, planned) {

    if (!planned) return 0;

    return Math.min(
        100,
        Math.round((studied / planned) * 100)
    );
}


/* =========================================================
   ساخت گزارش مشاور
========================================================= */

function buildAdvisorReportNew() {

    let totalPlanned = 0;
    let totalStudied = 0;
    let totalTests = 0;

    let dailyHTML = "";


    SCHEDULE.forEach((day, dayIndex) => {

        let dayPlanned = 0;
        let dayStudied = 0;
        let dayTests = 0;

        let activitiesHTML = "";


        day.activities.forEach((activity, activityIndex) => {

            /*
             وعده‌های غذایی در گزارش درسی
             محاسبه نمی‌شوند.
            */

            if (activity.type === "meal") {
                return;
            }


            const planned =
                advisorActivityMinutes(activity);

            const record =
                advisorGetRecord(
                    dayIndex,
                    activityIndex
                );

            const studied =
                advisorStudiedMinutes(record);

            const tests =
                advisorTests(record);

            const percent =
                advisorPercent(
                    studied,
                    planned
                );


            dayPlanned += planned;
            dayStudied += studied;
            dayTests += tests;


            activitiesHTML += `

                <div class="advisor-activity">

                    <div class="advisor-activity-title">
                        📚 ${activity.title}
                    </div>

                    <div class="advisor-activity-grid">

                        <div class="advisor-mini-stat">

                            <span class="advisor-mini-label">
                                زمان برنامه‌ریزی‌شده
                            </span>

                            <span class="advisor-mini-value">
                                ${formatAdvisorTime(planned)}
                            </span>

                        </div>


                        <div class="advisor-mini-stat">

                            <span class="advisor-mini-label">
                                مدت زمان خوانده‌شده
                            </span>

                            <span class="advisor-mini-value">
                                ${formatAdvisorTime(studied)}
                            </span>

                        </div>


                        <div class="advisor-mini-stat">

                            <span class="advisor-mini-label">
                                درصد تکمیل
                            </span>

                            <span class="advisor-mini-value">
                                ${percent}٪
                            </span>

                        </div>


                        <div class="advisor-mini-stat">

                            <span class="advisor-mini-label">
                                تعداد تست
                            </span>

                            <span class="advisor-mini-value">
                                ${tests}
                            </span>

                        </div>


                        <div class="advisor-mini-stat">

                            <span class="advisor-mini-label">
                                زمان
                            </span>

                            <span class="advisor-mini-value">
                                ${activity.start}
                                تا
                                ${activity.end}
                            </span>

                        </div>

                    </div>

                </div>
            `;
        });


        totalPlanned += dayPlanned;
        totalStudied += dayStudied;
        totalTests += dayTests;


        const dayPercent =
            advisorPercent(
                dayStudied,
                dayPlanned
            );


        dailyHTML += `

            <div class="advisor-day-card">

                <div class="advisor-day-title">

                    ${day.weekday}
                    —
                    ${day.date}

                </div>


                <div class="advisor-day-summary">

                    <div class="advisor-chip">
                        برنامه این روز:
                        ${formatAdvisorTime(dayPlanned)}
                    </div>

                    <div class="advisor-chip">
                        مطالعه‌شده:
                        ${formatAdvisorTime(dayStudied)}
                    </div>

                    <div class="advisor-chip">
                        تکمیل:
                        ${dayPercent}٪
                    </div>

                    <div class="advisor-chip">
                        تست:
                        ${dayTests}
                    </div>

                </div>


                ${activitiesHTML}

            </div>

        `;
    });


    const overallPercent =
        advisorPercent(
            totalStudied,
            totalPlanned
        );


    return `

        <!-- چهار شاخص اصلی -->

        <div class="advisor-summary-grid">


            <div class="advisor-stat-card">

                <div class="advisor-stat-title">
                    مدت زمان برنامه‌ریزی‌شده
                </div>

                <div class="advisor-stat-value">
                    ${formatAdvisorTime(totalPlanned)}
                </div>

            </div>


            <div class="advisor-stat-card">

                <div class="advisor-stat-title">
                    مدت زمان خوانده‌شده
                </div>

                <div class="advisor-stat-value">
                    ${formatAdvisorTime(totalStudied)}
                </div>

            </div>


            <div class="advisor-stat-card">

                <div class="advisor-stat-title">
                    درصد تکمیل برنامه
                </div>

                <div class="advisor-stat-value">
                    ${overallPercent}٪
                </div>

            </div>


            <div class="advisor-stat-card">

                <div class="advisor-stat-title">
                    تعداد تست‌های زده‌شده
                </div>

                <div class="advisor-stat-value">
                    ${totalTests}
                </div>

            </div>


        </div>


        <!-- گزارش روزبه‌روز -->

        ${dailyHTML}

    `;
}


/* =========================================================
   کشویی پنل دانش‌آموز
========================================================= */

function activateStudentDayDropdown() {

    const containers = [
        document.getElementById("daysContainer"),
        document.querySelector(".days-container")
    ].filter(Boolean);


    containers.forEach(container => {

        if (container.dataset.dropdownReady === "true") {
            return;
        }

        container.dataset.dropdownReady = "true";


        container.addEventListener("click", function(event) {

            const button =
                event.target.closest(".day-header");


            if (!button) {
                return;
            }


            const body =
                button.nextElementSibling;


            if (!body ||
                !body.classList.contains("day-body")) {
                return;
            }


            const opening =
                !body.classList.contains("open");


            body.classList.toggle(
                "open",
                opening
            );


            button.classList.toggle(
                "active",
                opening
            );


            button.setAttribute(
                "aria-expanded",
                opening ? "true" : "false"
            );

        });

    });

}


/* =========================================================
   تابع اتصال گزارش به پنل مشاور
========================================================= */

function refreshNewAdvisorReport() {

    const report =
        buildAdvisorReportNew();


    /*
      چند ID رایج را بررسی می‌کنیم تا
      ساختار فعلی برنامه خراب نشود.
    */

    const possibleContainers = [

        document.getElementById("advisorReport"),

        document.getElementById("advisorPanel"),

        document.querySelector(".advisor-report"),

        document.querySelector(".advisor-content"),

        document.querySelector("#advisorContent")

    ].filter(Boolean);


    if (!possibleContainers.length) {
        return;
    }


    /*
      اگر کانتینر اصلی پیدا شد،
      فقط محتوای گزارش را داخل آن قرار می‌دهیم.
    */

    possibleContainers[0].innerHTML = report;
}


/* =========================================================
   اجرای اولیه
========================================================= */

function initializeNewStudyFeatures() {

    activateStudentDayDropdown();

    /*
      چون پنل ممکن است بعداً دوباره render شود،
      دوباره event را روی container جدید فعال می‌کنیم.
    */

    setTimeout(
        activateStudentDayDropdown,
        300
    );

    setTimeout(
        activateStudentDayDropdown,
        1000
    );

}


/* ---------------------------------------------------------
   شروع
--------------------------------------------------------- */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeNewStudyFeatures
    );

} else {

    initializeNewStudyFeatures();

}


/*
  برای استفاده احتمالی توسط کد اصلی
*/

window.buildAdvisorReportNew =
    buildAdvisorReportNew;

window.refreshNewAdvisorReport =
    refreshNewAdvisorReport;

window.activateStudentDayDropdown =
    activateStudentDayDropdown;
