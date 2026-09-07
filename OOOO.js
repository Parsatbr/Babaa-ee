/* ==========================================================================
   OOOO.js
   پیگیری برنامه مطالعاتی دانش‌آموز
   ========================================================================== */


/* ==========================================================================
   1) برنامه مطالعاتی
   ========================================================================== */

const SCHEDULE = [
  { date: "16 شهریور", weekday: "دوشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"تست فصل ۱ فیزیک ۱ + دوره فصل ۲ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"دوره فصل ۱ شیمی ۱ + تست (حداقل ۸۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"تست فصل ۱ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"الگو و دنباله حسابی، ریاضی ۱ و حسابان + تست", subject:"ریاضی ۱ و حسابان", type:"study" },
    { start:"16:10", end:"17:25", title:"هندسه ۳", subject:"هندسه ۳", type:"study" },
    { start:"17:40", end:"18:55", title:"فیزیک ۳", subject:"فیزیک ۳", type:"study" },
    { start:"19:10", end:"20:25", title:"مرور و تست فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تست فصل ۱ فیزیک ۱ + دوره فصل ۲ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"23:10", end:"00:25", title:"دوره فصل ۱ شیمی ۱ + تست (حداقل ۸۰ تست)", subject:"شیمی ۱", type:"study" },
  ]},

  { date: "17 شهریور", weekday: "سه‌شنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"الگو و دنباله حسابی، ریاضی ۱ و حسابان + تست", subject:"ریاضی ۱ و حسابان", type:"study" },
    { start:"10:40", end:"11:55", title:"گسسته", subject:"گسسته", type:"study" },
    { start:"12:10", end:"13:25", title:"تست فصل ۱ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"دوره و تست فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"16:10", end:"17:25", title:"مرور شیمی ۱ و تکمیل تست‌ها", subject:"شیمی ۱", type:"study" },
    { start:"17:40", end:"18:55", title:"توان‌های گویا و عبارات جبری + تست", subject:"ریاضی (جبر)", type:"study" },
    { start:"19:10", end:"20:25", title:"فصل ۲ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تست فصل ۲ فیزیک ۱ (حداقل ۸۰ تست)", subject:"فیزیک ۱", type:"study" },
    { start:"23:10", end:"00:25", title:"تست فصل ۲ هندسه ۱", subject:"هندسه ۱", type:"study" },
  ]},

  { date: "18 شهریور", weekday: "چهارشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"هندسه ۳", subject:"هندسه ۳", type:"study" },
    { start:"10:40", end:"11:55", title:"دوره و تست فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"تکمیل تست شیمی ۱", subject:"شیمی ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"توان‌های گویا و عبارات جبری + تست", subject:"ریاضی (جبر)", type:"study" },
    { start:"16:10", end:"17:25", title:"فصل ۲ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"17:40", end:"18:55", title:"تست فصل ۲ فیزیک ۱ (حداقل ۸۰ تست)", subject:"فیزیک ۱", type:"study" },
    { start:"19:10", end:"20:25", title:"تست فصل ۲ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"گسسته", subject:"گسسته", type:"study" },
    { start:"23:10", end:"00:25", title:"معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست", subject:"ریاضی (معادله)", type:"study" },
  ]},

  { date: "19 شهریور", weekday: "پنجشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"مرور و تست مباحث ریاضی", subject:"ریاضی", type:"study" },
    { start:"10:40", end:"11:55", title:"توان‌های گویا و عبارات جبری + تست", subject:"ریاضی (جبر)", type:"study" },
    { start:"12:10", end:"13:25", title:"فصل ۲ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"تست فصل ۲ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"16:10", end:"17:25", title:"فیزیک ۳", subject:"فیزیک ۳", type:"study" },
    { start:"17:40", end:"18:55", title:"معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست", subject:"ریاضی (معادله)", type:"study" },
    { start:"19:10", end:"20:25", title:"تست فصل ۲ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تکمیل تست‌های ریاضی", subject:"ریاضی", type:"study" },
    { start:"23:10", end:"00:25", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
  ]},

  { date: "20 شهریور", weekday: "جمعه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"فصل ۲ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"تست فصل ۲ فیزیک ۱ (حداقل ۸۰ تست)", subject:"فیزیک ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست", subject:"ریاضی (معادله)", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"تست فصل ۳ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"16:10", end:"17:25", title:"هندسه ۳", subject:"هندسه ۳", type:"study" },
    { start:"17:40", end:"18:55", title:"دوره و تست فصل ۳ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"19:10", end:"20:25", title:"مرور شیمی ۱", subject:"شیمی ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"فصل ۲ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"23:10", end:"00:25", title:"معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست", subject:"ریاضی (معادله)", type:"study" },
  ]},

  { date: "21 شهریور", weekday: "شنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"تست فصل ۳ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"دوره و تست فصل ۳ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"گسسته", subject:"گسسته", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"تکمیل تست فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"16:10", end:"17:25", title:"تکمیل تست ریاضی", subject:"ریاضی", type:"study" },
    { start:"17:40", end:"18:55", title:"فصل ۲ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"19:10", end:"20:25", title:"معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست", subject:"ریاضی (معادله)", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"دوره و تست فصل ۳ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"23:10", end:"00:25", title:"تست فصل ۴ هندسه ۱", subject:"هندسه ۱", type:"study" },
  ]},

  { date: "22 شهریور", weekday: "یکشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"تست فصل ۴ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"فیزیک ۳", subject:"فیزیک ۳", type:"study" },
    { start:"12:10", end:"13:25", title:"مرور فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"فصل ۲ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"16:10", end:"17:25", title:"معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست", subject:"ریاضی (معادله)", type:"study" },
    { start:"17:40", end:"18:55", title:"تکمیلی فصل‌های ۳ و ۴ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"19:10", end:"20:25", title:"تکمیلی فصل‌های ۳ و ۴ هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"هندسه ۳", subject:"هندسه ۳", type:"study" },
    { start:"23:10", end:"00:25", title:"دوره و تست فیزیک ۱", subject:"فیزیک ۱", type:"study" },
  ]},

  { date: "23 شهریور", weekday: "دوشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"تکمیل تست هندسه ۱", subject:"هندسه ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"مثلثات دهم و یازدهم + تست (حداقل ۱۵۰ تست)", subject:"مثلثات", type:"study" },
    { start:"12:10", end:"13:25", title:"فصل ۳ شیمی ۱ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"فصل ۴ فیزیک ۱ + تست (حداقل ۵۰ تست)", subject:"فیزیک ۱", type:"study" },
    { start:"16:10", end:"17:25", title:"دوره و تست فصل ۱ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"17:40", end:"18:55", title:"گسسته", subject:"گسسته", type:"study" },
    { start:"19:10", end:"20:25", title:"مثلثات + تست", subject:"مثلثات", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تکمیل تست شیمی ۱", subject:"شیمی ۱", type:"study" },
    { start:"23:10", end:"00:25", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
  ]},

  { date: "24 شهریور", weekday: "سه‌شنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"مثلثات دهم و یازدهم + تست", subject:"مثلثات", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۳ شیمی ۱ + تست", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"فصل ۴ فیزیک ۱ + تست", subject:"فیزیک ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"دوره و تست فصل ۱ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"16:10", end:"17:25", title:"فیزیک ۳", subject:"فیزیک ۳", type:"study" },
    { start:"17:40", end:"18:55", title:"مثلثات + تست", subject:"مثلثات", type:"study" },
    { start:"19:10", end:"20:25", title:"مرور فصل ۳ شیمی ۱", subject:"شیمی ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"مثلثات دهم و یازدهم + تست", subject:"مثلثات", type:"study" },
    { start:"23:10", end:"00:25", title:"فصل ۳ شیمی ۱ + تست", subject:"شیمی ۱", type:"study" },
  ]},

  { date: "25 شهریور", weekday: "چهارشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"فصل ۴ فیزیک ۱ + تست", subject:"فیزیک ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"دوره و تست فصل ۱ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"12:10", end:"13:25", title:"هندسه ۳", subject:"هندسه ۳", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"مثلثات + تست", subject:"مثلثات", type:"study" },
    { start:"16:10", end:"17:25", title:"تکمیل تست فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"17:40", end:"18:55", title:"مثلثات دهم و یازدهم + تست", subject:"مثلثات", type:"study" },
    { start:"19:10", end:"20:25", title:"فصل ۳ شیمی ۱ + تست", subject:"شیمی ۱", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"فصل ۴ فیزیک ۱ + تست", subject:"فیزیک ۱", type:"study" },
    { start:"23:10", end:"00:25", title:"دوره فصل ۲ هندسه ۲", subject:"هندسه ۲", type:"study" },
  ]},

  { date: "26 شهریور", weekday: "پنجشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"گسسته", subject:"گسسته", type:"study" },
    { start:"10:40", end:"11:55", title:"مثلثات + تست", subject:"مثلثات", type:"study" },
    { start:"12:10", end:"13:25", title:"مرور هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"مثلثات دهم و یازدهم + تست", subject:"مثلثات", type:"study" },
    { start:"16:10", end:"17:25", title:"فصل ۳ شیمی ۱ + تست", subject:"شیمی ۱", type:"study" },
    { start:"17:40", end:"18:55", title:"دوره فصل ۵ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"19:10", end:"20:25", title:"دوره فصل ۲ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"فیزیک ۳", subject:"فیزیک ۳", type:"study" },
    { start:"23:10", end:"00:25", title:"مثلثات + تست", subject:"مثلثات", type:"study" },
  ]},

  { date: "27 شهریور", weekday: "جمعه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"تکمیل تست شیمی ۱", subject:"شیمی ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"مثلثات دهم و یازدهم + تست", subject:"مثلثات", type:"study" },
    { start:"12:10", end:"13:25", title:"فصل ۳ شیمی ۱ + تست", subject:"شیمی ۱", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"دوره فصل ۵ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"16:10", end:"17:25", title:"دوره و تست فصل ۳ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"17:40", end:"18:55", title:"دوره و تست فصل ۳ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"19:10", end:"20:25", title:"هندسه ۳", subject:"هندسه ۳", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"مرور فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"23:10", end:"00:25", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
  ]},

  { date: "28 شهریور", weekday: "شنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"مثلثات دهم و یازدهم + تست", subject:"مثلثات", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۳ شیمی ۱ + تست", subject:"شیمی ۱", type:"study" },
    { start:"12:10", end:"13:25", title:"تکمیلی تستی فصل‌های ۲ و ۳ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"تکمیلی تستی فصل‌های ۲ و ۳ هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"16:10", end:"17:25", title:"گسسته", subject:"گسسته", type:"study" },
    { start:"17:40", end:"18:55", title:"دوره فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"19:10", end:"20:25", title:"تکمیل تست هندسه ۲", subject:"هندسه ۲", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تابع دهم و یازدهم + نمایی و لگاریتمی + تست", subject:"تابع", type:"study" },
    { start:"23:10", end:"00:25", title:"فصل ۱ شیمی ۲ + تست (حداقل ۱۵۰ تست)", subject:"شیمی ۲", type:"study" },
  ]},

  { date: "29 شهریور", weekday: "یکشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"تست فصل ۵ فیزیک ۱ / تکمیل تست فصل ۴", subject:"فیزیک ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"فصل ۱ آمار و احتمال + تست", subject:"آمار و احتمال", type:"study" },
    { start:"12:10", end:"13:25", title:"فیزیک ۳", subject:"فیزیک ۳", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"تابع + تست", subject:"تابع", type:"study" },
    { start:"16:10", end:"17:25", title:"تکمیل تست شیمی ۲", subject:"شیمی ۲", type:"study" },
    { start:"17:40", end:"18:55", title:"تابع دهم و یازدهم + نمایی و لگاریتمی + تست", subject:"تابع", type:"study" },
    { start:"19:10", end:"20:25", title:"فصل ۱ شیمی ۲ + تست", subject:"شیمی ۲", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"تست فصل ۵ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"23:10", end:"00:25", title:"احتمال + تست (بخش اول)", subject:"آمار و احتمال", type:"study" },
  ]},

  { date: "30 شهریور", weekday: "دوشنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"هندسه ۳", subject:"هندسه ۳", type:"study" },
    { start:"10:40", end:"11:55", title:"تابع + تست", subject:"تابع", type:"study" },
    { start:"12:10", end:"13:25", title:"تکمیل تست شیمی ۲", subject:"شیمی ۲", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"تابع دهم و یازدهم + نمایی و لگاریتمی + تست", subject:"تابع", type:"study" },
    { start:"16:10", end:"17:25", title:"فصل ۱ شیمی ۲ + تست", subject:"شیمی ۲", type:"study" },
    { start:"17:40", end:"18:55", title:"تکمیل تست فصل‌های ۲، ۴ و ۵ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"19:10", end:"20:25", title:"تکمیلی آمار و احتمال", subject:"آمار و احتمال", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"گسسته", subject:"گسسته", type:"study" },
    { start:"23:10", end:"00:25", title:"تابع + تست", subject:"تابع", type:"study" },
  ]},

  { date: "31 شهریور", weekday: "سه‌شنبه", activities: [
    { start:"08:30", end:"09:10", title:"صبحانه", type:"meal" },
    { start:"09:10", end:"10:25", title:"مرور فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"10:40", end:"11:55", title:"تابع دهم و یازدهم + نمایی و لگاریتمی + تست", subject:"تابع", type:"study" },
    { start:"12:10", end:"13:25", title:"فصل ۱ شیمی ۲ + تست", subject:"شیمی ۲", type:"study" },
    { start:"14:00", end:"14:40", title:"ناهار", type:"meal" },
    { start:"14:40", end:"15:55", title:"تکمیل تست فصل‌های ۲، ۴ و ۵ فیزیک ۱", subject:"فیزیک ۱", type:"study" },
    { start:"16:10", end:"17:25", title:"احتمال + تست", subject:"آمار و احتمال", type:"study" },
    { start:"17:40", end:"18:55", title:"فیزیک ۳", subject:"فیزیک ۳", type:"study" },
    { start:"19:10", end:"20:25", title:"هندسه ۳ + تست", subject:"هندسه ۳", type:"study" },
    { start:"21:00", end:"21:40", title:"شام", type:"meal" },
    { start:"21:40", end:"22:55", title:"جمع‌بندی و تست ترکیبی", subject:"جمع‌بندی", type:"study" },
    { start:"23:10", end:"00:25", title:"عمومی پایه", subject:"عمومی پایه", type:"study" },
  ]},
];


/* ==========================================================================
   2) ابزارهای پایه
   ========================================================================== */

const FA_DIGITS = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];

function toFaDigits(input) {
  return String(input).replace(/[0-9]/g, d => FA_DIGITS[Number(d)]);
}

function plannedMinutes(activity) {
  if (!activity || !activity.start || !activity.end) return 0;

  const [sh, sm] = activity.start.split(":").map(Number);
  const [eh, em] = activity.end.split(":").map(Number);

  let startMinutes = sh * 60 + sm;
  let endMinutes = eh * 60 + em;

  // فعالیت‌هایی که از نیمه‌شب عبور می‌کنند
  // مثل 23:10 تا 00:25 باید 75 دقیقه محاسبه شوند.
  if (endMinutes <= startMinutes) {
    endMinutes += 24 * 60;
  }

  return Math.max(0, endMinutes - startMinutes);
}

function activityId(dayIndex, activityIndex) {
  return `day${dayIndex}_act${activityIndex}`;
}

function formatAdvisorTime(minutes) {
  minutes = Math.max(0, Number(minutes) || 0);

  if (minutes > 180) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (mins === 0) {
      return `${toFaDigits(hours)} ساعت`;
    }

    return `${toFaDigits(hours)} ساعت و ${toFaDigits(mins)} دقیقه`;
  }

  return `${toFaDigits(minutes)} دقیقه`;
}

function percentClass(percent) {
  percent = Number(percent) || 0;

  if (percent >= 80) return "pct-good";
  if (percent >= 40) return "pct-mid";
  return "pct-low";
}


/* ==========================================================================
   3) localStorage
   ========================================================================== */

const STORAGE_KEY = "studyTrackerRecords_v1";

function loadRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.error("خطا در خواندن اطلاعات:", error);
    return {};
  }
}

function saveRecords(records) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (error) {
    console.error("خطا در ذخیره اطلاعات:", error);
  }
}

let RECORDS = loadRecords();


/* ==========================================================================
   4) محاسبات
   ========================================================================== */

function allStudyActivities() {
  const result = [];

  SCHEDULE.forEach((day, dayIndex) => {
    day.activities.forEach((activity, activityIndex) => {

      if (activity.type !== "study") return;

      result.push({
        ...activity,
        id: activityId(dayIndex, activityIndex),
        dayIndex,
        activityIndex,
        date: day.date,
        weekday: day.weekday,
        planned: plannedMinutes(activity)
      });
    });
  });

  return result;
}

function getRecord(dayIndex, activityIndex) {
  return RECORDS[activityId(dayIndex, activityIndex)] || null;
}

function getStudiedMinutes(record) {
  if (!record) return 0;

  const minutes = Number(
    record.studyMinutes ??
    record.studiedMinutes ??
    record.minutes ??
    record.duration ??
    record.time ??
    0
  ) || 0;

  return Math.max(0, minutes);
}

function getTestCount(record) {
  if (!record) return 0;

  return Number(
    record.testCount ??
    record.tests ??
    record.test ??
    0
  ) || 0;
}

function getPercent(studied, planned) {
  studied = Math.max(0, Number(studied) || 0);
  planned = Math.max(0, Number(planned) || 0);

  if (!planned) return 0;

  return Math.max(
    0,
    Math.min(
      100,
      Math.round((studied / planned) * 100)
    )
  );
}

function computeOverallStats() {

  const activities = allStudyActivities();

  let totalPlanned = 0;
  let totalStudied = 0;
  let totalTests = 0;

  let doneCount = 0;
  let skippedCount = 0;
  let unrecordedCount = 0;

  activities.forEach(activity => {

    totalPlanned += activity.planned;

    const record = RECORDS[activity.id];

    if (!record) {
      unrecordedCount++;
      return;
    }

    if (record.status === "done") {
      doneCount++;
      totalStudied += getStudiedMinutes(record);
      totalTests += getTestCount(record);
    }

    if (record.status === "skipped") {
      skippedCount++;
    }
  });

  return {
    totalPlanned,
    totalStudied,
    totalTests,
    doneCount,
    skippedCount,
    unrecordedCount,
    overallPercent: getPercent(totalStudied, totalPlanned),
    totalActivities: activities.length
  };
}

function dailyQuickStats(dayIndex) {

  const day = SCHEDULE[dayIndex];

  let planned = 0;
  let studied = 0;
  let done = 0;

  day.activities.forEach((activity, activityIndex) => {

    if (activity.type !== "study") return;

    planned += plannedMinutes(activity);

    const record = getRecord(dayIndex, activityIndex);

    if (record && record.status === "done") {
      done++;
      studied += getStudiedMinutes(record);
    }
  });

  return {
    planned,
    studied,
    done,
    total: day.activities.filter(a => a.type === "study").length,
    percent: getPercent(studied, planned)
  };
}

function computeTodayStats() {

  const activities = allStudyActivities();

  let todayIndex = 0;
  let latestTime = 0;

  activities.forEach(activity => {

    const record = RECORDS[activity.id];

    if (!record || !record.recordedAt) return;

    const time = new Date(record.recordedAt).getTime();

    if (time >= latestTime) {
      latestTime = time;
      todayIndex = activity.dayIndex;
    }
  });

  const stats = dailyQuickStats(todayIndex);

  let tests = 0;

  SCHEDULE[todayIndex].activities.forEach((activity, activityIndex) => {

    if (activity.type !== "study") return;

    const record = getRecord(todayIndex, activityIndex);

    if (record && record.status === "done") {
      tests += getTestCount(record);
    }
  });

  return {
    dayIndex: todayIndex,
    date: SCHEDULE[todayIndex].date,
    weekday: SCHEDULE[todayIndex].weekday,
    studied: stats.studied,
    tests,
    done: stats.done,
    percent: stats.percent,
    totalActs: stats.total
  };
}


/* ==========================================================================
   5) پنل دانش‌آموز
   ========================================================================== */

const openDays = new Set();

function renderStudentPanel() {

  const container = document.getElementById("daysContainer");

  if (!container) return;

  container.innerHTML = "";

  SCHEDULE.forEach((day, dayIndex) => {

    const dayCard = document.createElement("div");
    dayCard.className = "day-card glass";

    const stats = dailyQuickStats(dayIndex);

    const header = document.createElement("button");

    header.type = "button";
    header.className = "day-header";

    header.setAttribute(
      "aria-expanded",
      openDays.has(dayIndex) ? "true" : "false"
    );

    header.innerHTML = `
      <div class="day-header-main">

        <span class="day-title">
          ${day.weekday} ${toFaDigits(day.date)}
        </span>

        <span class="day-sub">
          برنامه: ${formatAdvisorTime(stats.planned)}
          &nbsp; | &nbsp;
          ${toFaDigits(stats.done)}
          از
          ${toFaDigits(stats.total)}
          فعالیت ثبت شده
        </span>

      </div>

      <div class="day-header-side">

        <span class="mini-percent ${percentClass(stats.percent)}">
          ${toFaDigits(stats.percent)}٪
        </span>

        <span class="chevron">⌄</span>

      </div>
    `;

    const body = document.createElement("div");

    body.className = "day-body";

    if (openDays.has(dayIndex)) {
      body.classList.add("open");
      header.classList.add("active");
    }

    day.activities.forEach((activity, activityIndex) => {

      body.appendChild(
        renderActivityCard(
          day,
          dayIndex,
          activity,
          activityIndex
        )
      );
    });

    /*
      مهم:
      فقط همین Event برای کشویی استفاده می‌شود.
      Event دیگری در انتهای فایل وجود ندارد.
    */

    header.addEventListener("click", () => {

      const opening = !body.classList.contains("open");

      body.classList.toggle("open", opening);
      header.classList.toggle("active", opening);

      header.setAttribute(
        "aria-expanded",
        opening ? "true" : "false"
      );

      if (opening) {
        openDays.add(dayIndex);
      } else {
        openDays.delete(dayIndex);
      }
    });

    dayCard.appendChild(header);
    dayCard.appendChild(body);

    container.appendChild(dayCard);
  });
}

function renderActivityCard(day, dayIndex, activity, activityIndex) {

  const card = document.createElement("div");

  if (activity.type === "meal") {

    card.className = "activity-card meal-card";

    card.innerHTML = `
      <div class="activity-time">
        ${toFaDigits(activity.start)}
        -
        ${toFaDigits(activity.end)}
      </div>

      <div class="activity-main">
        <span class="meal-icon">🍽️</span>

        <span class="activity-title">
          ${activity.title}
        </span>
      </div>
    `;

    return card;
  }

  const id = activityId(dayIndex, activityIndex);
  const record = RECORDS[id];
  const planned = plannedMinutes(activity);

  let statusBadge = `
    <span class="status-badge status-none">
      ثبت‌نشده
    </span>
  `;

  let progressHTML = "";

  if (record && record.status === "done") {

    const studied = getStudiedMinutes(record);
    const tests = getTestCount(record);
    const percent = getPercent(studied, planned);

    statusBadge = `
      <span class="status-badge status-done">
        خواندم
      </span>
    `;

    progressHTML = `
      <div class="progress-wrap">

        <div class="progress-bar-track">

          <div
            class="progress-bar-fill ${percentClass(percent)}"
            style="width:${percent}%"
          ></div>

        </div>

        <span class="progress-label ${percentClass(percent)}">
          ${toFaDigits(percent)}٪
        </span>

      </div>

      <div class="activity-detail-row">

        <span>
          مدت مطالعه:
          ${formatAdvisorTime(studied)}
        </span>

        <span>
          تعداد تست:
          ${toFaDigits(tests)}
        </span>

      </div>
    `;
  }

  else if (record && record.status === "skipped") {

    statusBadge = `
      <span class="status-badge status-skip">
        نخواندم
      </span>
    `;
  }

  card.className = "activity-card study-card";

  card.innerHTML = `

    <div class="activity-time">
      ${toFaDigits(activity.start)}
      -
      ${toFaDigits(activity.end)}

      <span class="planned-min">
        (${formatAdvisorTime(planned)} برنامه)
      </span>
    </div>

    <div class="activity-main">

      <div class="activity-text">

        <span class="activity-subject">
          ${activity.subject}
        </span>

        <span class="activity-title">
          ${activity.title}
        </span>

      </div>

      ${statusBadge}

    </div>

    ${progressHTML}

    <button
      class="record-btn"
      type="button"
    >
      ثبت
    </button>

  `;

  card
    .querySelector(".record-btn")
    .addEventListener("click", () => {

      openRecordModal(
        id,
        activity,
        day
      );
    });

  return card;
}


/* ==========================================================================
   6) مودال ثبت
   ========================================================================== */

function openRecordModal(recordId, activity, day) {

  const modal = document.getElementById("recordModal");

  if (!modal) return;

  const modalTitle =
    document.getElementById("modalActivityTitle");

  const modalMeta =
    document.getElementById("modalActivityMeta");

  const choiceStep =
    document.getElementById("modalChoiceStep");

  const formStep =
    document.getElementById("modalFormStep");

  const minutesInput =
    document.getElementById("studyMinutesInput");

  const testsInput =
    document.getElementById("testCountInput");

  const formError =
    document.getElementById("modalFormError");

  modalTitle.textContent = activity.title;

  modalMeta.textContent =
    `${day.weekday} ${toFaDigits(day.date)} — ` +
    `${activity.subject} — ` +
    `${toFaDigits(activity.start)} تا ${toFaDigits(activity.end)}`;

  choiceStep.classList.remove("hidden");
  formStep.classList.add("hidden");

  minutesInput.value = "";
  testsInput.value = "";
  formError.textContent = "";

  modal.classList.add("open");

  const planned = plannedMinutes(activity);

  document.getElementById("btnSkipped").onclick = () => {

    RECORDS[recordId] = {
      status: "skipped",
      recordedAt: new Date().toISOString()
    };

    saveRecords(RECORDS);

    closeModal();

    renderStudentPanel();
    renderDashboard();

    if (
      document.getElementById("panel-advisor")?.classList.contains("active")
    ) {
      renderAdvisorPanel();
    }
  };

  document.getElementById("btnDone").onclick = () => {

    choiceStep.classList.add("hidden");
    formStep.classList.remove("hidden");
  };

  document.getElementById("confirmDoneBtn").onclick = () => {

    const minutesRaw = minutesInput.value.trim();
    const testsRaw = testsInput.value.trim();

    if (
      minutesRaw === "" ||
      isNaN(Number(minutesRaw))
    ) {
      formError.textContent =
        "لطفاً مدت مطالعه را به دقیقه وارد کنید.";

      return;
    }

    if (
      testsRaw === "" ||
      isNaN(Number(testsRaw))
    ) {
      formError.textContent =
        "لطفاً تعداد تست را وارد کنید.";

      return;
    }

    const minutes =
      Math.max(0, Number(minutesRaw));

    const tests =
      Math.max(0, Number(testsRaw));

    const percent =
      getPercent(minutes, planned);

    RECORDS[recordId] = {
      status: "done",
      studyMinutes: minutes,
      testCount: tests,
      percent,
      recordedAt: new Date().toISOString()
    };

    saveRecords(RECORDS);

    closeModal();

    renderStudentPanel();
    renderDashboard();

    if (
      document.getElementById("panel-advisor")?.classList.contains("active")
    ) {
      renderAdvisorPanel();
    }
  };
}

function closeModal() {

  const modal =
    document.getElementById("recordModal");

  if (modal) {
    modal.classList.remove("open");
  }
}


/* ==========================================================================
   7) داشبورد دانش‌آموز
   ========================================================================== */

function renderDashboard() {

  const grid =
    document.getElementById("dashboardGrid");

  if (!grid) return;

  const overall =
    computeOverallStats();

  const today =
    computeTodayStats();

  grid.innerHTML = `

    <div class="stat-card glass">

      <span class="stat-label">
        پیشرفت امروز
      </span>

      <span class="stat-value ${percentClass(today.percent)}">
        ${toFaDigits(today.percent)}٪
      </span>

      <span class="stat-foot">
        ${today.weekday}
        ${toFaDigits(today.date)}
      </span>

    </div>


    <div class="stat-card glass">

      <span class="stat-label">
        مدت مطالعه امروز
      </span>

      <span class="stat-value">
        ${formatAdvisorTime(today.studied)}
      </span>

    </div>


    <div class="stat-card glass">

      <span class="stat-label">
        تست‌های امروز
      </span>

      <span class="stat-value">
        ${toFaDigits(today.tests)}
      </span>

    </div>


    <div class="stat-card glass">

      <span class="stat-label">
        مطالعه کل
      </span>

      <span class="stat-value">
        ${formatAdvisorTime(overall.totalStudied)}
      </span>

    </div>


    <div class="stat-card glass">

      <span class="stat-label">
        برنامه کل
      </span>

      <span class="stat-value">
        ${formatAdvisorTime(overall.totalPlanned)}
      </span>

    </div>


    <div class="stat-card glass">

      <span class="stat-label">
        تست کل
      </span>

      <span class="stat-value">
        ${toFaDigits(overall.totalTests)}
      </span>

    </div>


    <div class="stat-card glass">

      <span class="stat-label">
        فعالیت‌های انجام‌شده
      </span>

      <span class="stat-value">
        ${toFaDigits(overall.doneCount)}
      </span>

      <span class="stat-foot">
        از ${toFaDigits(overall.totalActivities)}
      </span>

    </div>


    <div class="stat-card glass">

      <span class="stat-label">
        پیشرفت کل
      </span>

      <span class="stat-value ${percentClass(overall.overallPercent)}">
        ${toFaDigits(overall.overallPercent)}٪
      </span>

    </div>

  `;
       }
