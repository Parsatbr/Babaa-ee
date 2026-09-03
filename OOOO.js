/* ==========================================================================
   OOOO.js
   پیگیری برنامه مطالعاتی دانش‌آموز
   ========================================================================== */


/* ==========================================================================
   1) برنامه مطالعاتی
   ========================================================================== */

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

  return (eh * 60 + em) - (sh * 60 + sm);
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

  return Number(
    record.studyMinutes ??
    record.studiedMinutes ??
    record.minutes ??
    record.duration ??
    record.time ??
    0
  ) || 0;
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
  if (!planned) return 0;

  return Math.min(
    100,
    Math.round((studied / planned) * 100)
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
        تعداد تست امروز
      </span>

      <span class="stat-value">
        ${toFaDigits(today.tests)}
      </span>

      <span class="stat-foot">
        تست
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
        فعالیت‌های نخوانده
      </span>

      <span class="stat-value pct-low">
        ${toFaDigits(overall.skippedCount)}
      </span>

      <span class="stat-foot">
        فعالیت
      </span>

    </div>


    <div class="stat-card glass wide">

      <span class="stat-label">
        درصد مطالعه کل برنامه
      </span>

      <div class="progress-bar-track lg">

        <div
          class="progress-bar-fill ${percentClass(overall.overallPercent)}"
          style="width:${overall.overallPercent}%"
        ></div>

      </div>

      <span class="stat-foot">
        ${toFaDigits(overall.overallPercent)}٪
        از
        ${formatAdvisorTime(overall.totalPlanned)}
      </span>

    </div>

  `;
}


/* ==========================================================================
   8) گزارش کامل روزانه مشاور
   ========================================================================== */

function buildDailyAdvisorRows() {

  let rows = "";

  SCHEDULE.forEach((day, dayIndex) => {

    const stats =
      dailyQuickStats(dayIndex);

    let firstActivity = true;

    day.activities.forEach((activity, activityIndex) => {

      if (activity.type !== "study") return;

      const planned =
        plannedMinutes(activity);

      const record =
        getRecord(dayIndex, activityIndex);

      const studied =
        getStudiedMinutes(record);

      const tests =
        getTestCount(record);

      const percent =
        getPercent(studied, planned);

      let status = "ثبت‌نشده";

      if (record?.status === "done") {
        status = "خواندم";
      }

      if (record?.status === "skipped") {
        status = "نخواندم";
      }

      rows += `

        <tr>

          ${
            firstActivity
              ? `
                <td
                  rowspan="${day.activities.filter(a => a.type === "study").length}"
                  class="advisor-day-cell"
                >
                  <strong>
                    ${day.weekday}
                  </strong>

                  <br>

                  ${toFaDigits(day.date)}

                  <div class="advisor-day-total">

                    برنامه:
                    ${formatAdvisorTime(stats.planned)}

                    <br>

                    خوانده‌شده:
                    ${formatAdvisorTime(stats.studied)}

                    <br>

                    تست:
                    ${toFaDigits(
                      day.activities.reduce(
                        (sum, a, ai) => {

                          if (a.type !== "study") {
                            return sum;
                          }

                          const r =
                            getRecord(dayIndex, ai);

                          return sum +
                            getTestCount(r);
                        },
                        0
                      )
                    )}

                  </div>

                </td>
              `
              : ""
          }

          <td>

            <div class="advisor-subject">
              ${activity.subject}
            </div>

            <div class="advisor-title">
              ${activity.title}
            </div>

            <div class="advisor-time">
              ${toFaDigits(activity.start)}
              -
              ${toFaDigits(activity.end)}
            </div>

          </td>

          <td>
            ${formatAdvisorTime(planned)}
          </td>

          <td>
            ${formatAdvisorTime(studied)}
          </td>

          <td>

            <span class="table-pct ${percentClass(percent)}">
              ${toFaDigits(percent)}٪
            </span>

          </td>

          <td>
            ${toFaDigits(tests)}
          </td>

          <td>
            ${status}
          </td>

        </tr>

      `;

      firstActivity = false;
    });
  });

  return rows;
}


/* ==========================================================================
   9) گزارش مشاور
   ========================================================================== */

function renderAdvisorPanel() {

  const overall =
    computeOverallStats();

  /*
    چهار شاخص اصلی دقیقاً در بالای گزارش
  */

  const overallGrid =
    document.getElementById("advisorOverallGrid");

  if (overallGrid) {

    overallGrid.innerHTML = `

      <div class="advisor-stat-card stat-card glass">

        <div class="advisor-stat-title">
          مدت زمان برنامه‌ریزی شده
        </div>

        <div class="advisor-stat-value">
          ${formatAdvisorTime(overall.totalPlanned)}
        </div>

      </div>


      <div class="advisor-stat-card stat-card glass">

        <div class="advisor-stat-title">
          مدت زمان خوانده شده
        </div>

        <div class="advisor-stat-value">
          ${formatAdvisorTime(overall.totalStudied)}
        </div>

      </div>


      <div class="advisor-stat-card stat-card glass">

        <div class="advisor-stat-title">
          درصد تکمیل برنامه
        </div>

        <div class="advisor-stat-value ${percentClass(overall.overallPercent)}">
          ${toFaDigits(overall.overallPercent)}٪
        </div>

      </div>


      <div class="advisor-stat-card stat-card glass">

        <div class="advisor-stat-title">
          تعداد تست‌های زده شده
        </div>

        <div class="advisor-stat-value">
          ${toFaDigits(overall.totalTests)}
        </div>

      </div>

    `;
  }


  /*
    گزارش روزبه‌روز و جزئیات تک‌تک فعالیت‌ها
  */

  const dailyBody =
    document.getElementById("dailyReportBody");

  if (dailyBody) {

    dailyBody.innerHTML = buildDailyAdvisorRows();
  }


  /*
    گزارش درسی تجمیعی
  */

  const subjectBody =
    document.getElementById("subjectReportBody");

  if (subjectBody) {

    const subjects = {};

    allStudyActivities().forEach(activity => {

      if (!subjects[activity.subject]) {

        subjects[activity.subject] = {
          subject: activity.subject,
          planned: 0,
          studied: 0,
          tests: 0,
          done: 0,
          skipped: 0,
          unrecorded: 0
        };
      }

      const item =
        subjects[activity.subject];

      item.planned += activity.planned;

      const record =
        RECORDS[activity.id];

      if (!record) {

        item.unrecorded++;

      } else if (record.status === "done") {

        item.done++;

        item.studied +=
          getStudiedMinutes(record);

        item.tests +=
          getTestCount(record);

      } else if (record.status === "skipped") {

        item.skipped++;
      }
    });


    subjectBody.innerHTML =
      Object.values(subjects)
        .map(subject => {

          const percent =
            getPercent(
              subject.studied,
              subject.planned
            );

          return `

            <tr>

              <td>
                ${subject.subject}
              </td>

              <td>
                ${formatAdvisorTime(subject.planned)}
              </td>

              <td>
                ${formatAdvisorTime(subject.studied)}
              </td>

              <td>

                <span class="table-pct ${percentClass(percent)}">
                  ${toFaDigits(percent)}٪
                </span>

              </td>

              <td>
                ${toFaDigits(subject.tests)}
              </td>

              <td>
                ${toFaDigits(subject.done)}
              </td>

              <td>
                ${toFaDigits(subject.skipped)}
              </td>

            </tr>

          `;
        })
        .join("");
  }


  /*
    اگر HTML پروژه یک کانتینر اختصاصی advisorReport داشته باشد،
    نسخه‌ی کامل کارت‌های روزانه نیز در آن نمایش داده می‌شود.
  */

  const advisorReport =
    document.getElementById("advisorReport");

  if (advisorReport) {

    advisorReport.innerHTML = buildAdvisorCardReport();
  }
}


/* ==========================================================================
   10) نسخه کارت‌محور گزارش مشاور
   ========================================================================== */

function buildAdvisorCardReport() {

  const overall =
    computeOverallStats();

  let html = `

    <div class="advisor-summary-grid">

      <div class="advisor-stat-card">

        <div class="advisor-stat-title">
          مدت زمان برنامه‌ریزی شده
        </div>

        <div class="advisor-stat-value">
          ${formatAdvisorTime(overall.totalPlanned)}
        </div>

      </div>


      <div class="advisor-stat-card">

        <div class="advisor-stat-title">
          مدت زمان خوانده شده
        </div>

        <div class="advisor-stat-value">
          ${formatAdvisorTime(overall.totalStudied)}
        </div>

      </div>


      <div class="advisor-stat-card">

        <div class="advisor-stat-title">
          درصد تکمیل برنامه
        </div>

        <div class="advisor-stat-value">
          ${toFaDigits(overall.overallPercent)}٪
        </div>

      </div>


      <div class="advisor-stat-card">

        <div class="advisor-stat-title">
          تعداد تست‌های زده شده
        </div>

        <div class="advisor-stat-value">
          ${toFaDigits(overall.totalTests)}
        </div>

      </div>

    </div>

  `;


  SCHEDULE.forEach((day, dayIndex) => {

    let dayPlanned = 0;
    let dayStudied = 0;
    let dayTests = 0;

    let activitiesHTML = "";

    day.activities.forEach((activity, activityIndex) => {

      if (activity.type !== "study") return;

      const planned =
        plannedMinutes(activity);

      const record =
        getRecord(dayIndex, activityIndex);

      const studied =
        getStudiedMinutes(record);

      const tests =
        getTestCount(record);

      const percent =
        getPercent(studied, planned);

      dayPlanned += planned;
      dayStudied += studied;
      dayTests += tests;

      let status = "ثبت‌نشده";

      if (record?.status === "done") {
        status = "خواندم";
      } else if (record?.status === "skipped") {
        status = "نخواندم";
      }

      activitiesHTML += `

        <div class="advisor-activity">

          <div class="advisor-activity-title">

            📚 ${activity.subject}

            <br>

            <span>
              ${activity.title}
            </span>

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

              <span class="advisor-mini-value ${percentClass(percent)}">
                ${toFaDigits(percent)}٪
              </span>

            </div>


            <div class="advisor-mini-stat">

              <span class="advisor-mini-label">
                تعداد تست
              </span>

              <span class="advisor-mini-value">
                ${toFaDigits(tests)}
              </span>

            </div>


            <div class="advisor-mini-stat">

              <span class="advisor-mini-label">
                ساعت برنامه
              </span>

              <span class="advisor-mini-value">
                ${toFaDigits(activity.start)}
                تا
                ${toFaDigits(activity.end)}
              </span>

            </div>


            <div class="advisor-mini-stat">

              <span class="advisor-mini-label">
                وضعیت
              </span>

              <span class="advisor-mini-value">
                ${status}
              </span>

            </div>

          </div>

        </div>

      `;
    });


    const dayPercent =
      getPercent(
        dayStudied,
        dayPlanned
      );


    html += `

      <div class="advisor-day-card">

        <div class="advisor-day-title">

          ${day.weekday}
          —
          ${toFaDigits(day.date)}

        </div>


        <div class="advisor-day-summary">

          <div class="advisor-chip">
            برنامه:
            ${formatAdvisorTime(dayPlanned)}
          </div>

          <div class="advisor-chip">
            خوانده‌شده:
            ${formatAdvisorTime(dayStudied)}
          </div>

          <div class="advisor-chip">
            تکمیل:
            ${toFaDigits(dayPercent)}٪
          </div>

          <div class="advisor-chip">
            تست:
            ${toFaDigits(dayTests)}
          </div>

        </div>


        ${activitiesHTML}

      </div>

    `;
  });

  return html;
}


/* ==========================================================================
   11) جابه‌جایی پنل‌ها
   ========================================================================== */

function switchTab(tabName) {

  document
    .querySelectorAll(".tab-btn")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.tab === tabName
      );
    });


  document
    .querySelectorAll(".panel")
    .forEach(panel => {

      panel.classList.toggle(
        "active",
        panel.id === `panel-${tabName}`
      );
    });


  if (tabName === "advisor") {
    renderAdvisorPanel();
  }
}


/* ==========================================================================
   12) خروجی PDF
   ========================================================================== */

async function exportAdvisorPdf() {

  const button =
    document.getElementById("exportPdfBtn");

  if (!button) return;

  const originalText =
    button.textContent;

  button.disabled = true;
  button.textContent =
    "در حال ساخت PDF...";

  try {

    const overall =
      computeOverallStats();

    const printRoot =
      document.getElementById("pdfRenderRoot");

    if (!printRoot) {
      throw new Error("pdfRenderRoot پیدا نشد.");
    }

    printRoot.innerHTML = "";


    const page1 =
      document.createElement("div");

    page1.className = "pdf-page";

    page1.innerHTML = `

      <div class="pdf-header">

        <h1>
          گزارش پیشرفت مطالعاتی
        </h1>

        <p class="pdf-sub">
          گزارش مشاور
        </p>

      </div>


      <div class="pdf-stats-grid">

        <div class="pdf-stat">

          <span>
            مدت زمان برنامه‌ریزی‌شده
          </span>

          <b>
            ${formatAdvisorTime(overall.totalPlanned)}
          </b>

        </div>


        <div class="pdf-stat">

          <span>
            مدت زمان خوانده‌شده
          </span>

          <b>
            ${formatAdvisorTime(overall.totalStudied)}
          </b>

        </div>


        <div class="pdf-stat">

          <span>
            درصد تکمیل برنامه
          </span>

          <b>
            ${toFaDigits(overall.overallPercent)}٪
          </b>

        </div>


        <div class="pdf-stat">

          <span>
            تعداد تست‌های زده‌شده
          </span>

          <b>
            ${toFaDigits(overall.totalTests)}
          </b>

        </div>

      </div>

    `;


    printRoot.appendChild(page1);


    /*
      برای PDF گزارش روزانه کامل ساخته می‌شود.
    */

    SCHEDULE.forEach((day, dayIndex) => {

      const page =
        document.createElement("div");

      page.className = "pdf-page";

      let rows = "";

      day.activities.forEach(
        (activity, activityIndex) => {

          if (activity.type !== "study") return;

          const planned =
            plannedMinutes(activity);

          const record =
            getRecord(
              dayIndex,
              activityIndex
            );

          const studied =
            getStudiedMinutes(record);

          const tests =
            getTestCount(record);

          const percent =
            getPercent(
              studied,
              planned
            );

          rows += `

            <tr>

              <td>
                ${activity.subject}
                <br>
                ${activity.title}
              </td>

              <td>
                ${formatAdvisorTime(planned)}
              </td>

              <td>
                ${formatAdvisorTime(studied)}
              </td>

              <td>
                ${toFaDigits(percent)}٪
              </td>

              <td>
                ${toFaDigits(tests)}
              </td>

            </tr>

          `;
        }
      );


      page.innerHTML = `

        <h2 class="pdf-section-title">

          ${day.weekday}
          —
          ${toFaDigits(day.date)}

        </h2>

        <table class="pdf-table">

          <thead>

            <tr>

              <th>
                درس / فعالیت
              </th>

              <th>
                برنامه
              </th>

              <th>
                مطالعه
              </th>

              <th>
                درصد
              </th>

              <th>
                تست
              </th>

            </tr>

          </thead>

          <tbody>
            ${rows}
          </tbody>

        </table>

      `;

      printRoot.appendChild(page);
    });


    if (
      typeof html2canvas === "undefined" ||
      typeof window.jspdf === "undefined"
    ) {

      alert(
        "برای ساخت PDF نیاز به بارگذاری کتابخانه PDF است."
      );

      return;
    }


    const { jsPDF } =
      window.jspdf;

    const pdf =
      new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4"
      });


    const pageWidth =
      pdf.internal.pageSize.getWidth();

    const pageHeight =
      pdf.internal.pageSize.getHeight();


    const pages =
      printRoot.querySelectorAll(".pdf-page");


    for (
      let index = 0;
      index < pages.length;
      index++
    ) {

      const canvas =
        await html2canvas(
          pages[index],
          {
            scale: 1,
            backgroundColor: "#0b0e17"
          }
        );


      const image =
        canvas.toDataURL("image/jpeg",0.7);


      const imageHeight =
        (canvas.height * pageWidth) /
        canvas.width;


      if (index > 0) {
        pdf.addPage();
      }


      pdf.addImage(
        image,
        "JPEG",
        0,
        0,
        pageWidth,
        Math.min(
          imageHeight,
          pageHeight
        )
      );
    }


    pdf.save(
      "گزارش-برنامه-مطالعاتی.pdf"
    );


    printRoot.innerHTML = "";

  } catch (error) {

    console.error(
      "خطا در ساخت PDF:",
      error
    );

    alert(
      "متأسفانه ساخت PDF با خطا مواجه شد."
    );

  } finally {

    button.disabled = false;
    button.textContent =
      originalText;
  }
}


/* ==========================================================================
   13) راه‌اندازی
   ========================================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderStudentPanel();

    renderDashboard();


    document
      .querySelectorAll(".tab-btn")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {
            switchTab(button.dataset.tab);
          }
        );
      });


    const modalClose =
      document.getElementById(
        "modalCloseBtn"
      );

    if (modalClose) {
      modalClose.addEventListener(
        "click",
        closeModal
      );
    }


    const modal =
      document.getElementById(
        "recordModal"
      );

    if (modal) {

      modal.addEventListener(
        "click",
        event => {

          if (
            event.target.id ===
            "recordModal"
          ) {
            closeModal();
          }
        }
      );
    }


    const exportButton =
      document.getElementById(
        "exportPdfBtn"
      );

    if (exportButton) {

      exportButton.addEventListener(
        "click",
        exportAdvisorPdf
      );
    }

  }
);


/* ==========================================================================
   پایان فایل
   ========================================================================== */
