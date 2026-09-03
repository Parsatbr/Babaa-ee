/* =====================================================
   StudyFlow
   OOOO.js
   منطق کامل برنامه
   ===================================================== */


/* =====================================================
   ۱. داده‌ی برنامه‌ی مطالعاتی
   ===================================================== */

const studyPlan = [

    {
        day: "پنجشنبه", date: "۱۲ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "تست فصل ۱ فیزیک ۱ + دوره فصل ۲ فیزیک ۱" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "دوره فصل ۱ شیمی ۱ + تست، حداقل ۸۰ تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "تست فصل ۱ هندسه ۱" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "الگو و دنباله حسابی، ریاضی ۱ و حسابان + تست" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "هندسه ۳" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "فیزیک ۳" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "عمومی پایه" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "مرور و تست فیزیک ۱" }
        ]
    },

    {
        day: "جمعه", date: "۱۳ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "تست فصل ۱ فیزیک ۱ + دوره فصل ۲ فیزیک ۱" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "دوره فصل ۱ شیمی ۱ + تست، حداقل ۸۰ تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "الگو و دنباله حسابی، ریاضی ۱ و حسابان + تست" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "گسسته" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "تست فصل ۱ هندسه ۱" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "عمومی پایه" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "دوره و تست فیزیک ۱" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "مرور شیمی ۱ و تکمیل تست‌ها" }
        ]
    },

    {
        day: "شنبه", date: "۱۴ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "توان‌های گویا و عبارات جبری + تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "فصل ۲ شیمی ۱ + تست، حداقل ۱۵۰ تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "تست فصل ۲ فیزیک ۱، حداقل ۸۰ تست" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۴۰", title: "تست فصل ۲ هندسه ۱" },
            { type: "lesson", time: "۱۵:۵۵ تا ۱۷:۱۰", title: "هندسه ۳" },
            { type: "lesson", time: "۱۷:۲۵ تا ۱۸:۴۰", title: "عمومی پایه" },
            { type: "lesson", time: "۱۸:۵۵ تا ۲۰:۱۰", title: "دوره و تست فیزیک ۱" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "تکمیل تست شیمی ۱" }
        ]
    },

    {
        day: "یکشنبه", date: "۱۵ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "توان‌های گویا و عبارات جبری + تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "فصل ۲ شیمی ۱ + تست، حداقل ۱۵۰ تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "تست فصل ۲ فیزیک ۱، حداقل ۸۰ تست" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۴۰", title: "تست فصل ۲ هندسه ۱" },
            { type: "lesson", time: "۱۵:۵۵ تا ۱۷:۱۰", title: "گسسته" },
            { type: "lesson", time: "۱۷:۲۵ تا ۱۸:۴۰", title: "معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست" },
            { type: "lesson", time: "۱۸:۵۵ تا ۲۰:۱۰", title: "عمومی پایه" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "مرور و تست مباحث ریاضی" }
        ]
    },

    {
        day: "دوشنبه", date: "۱۶ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "توان‌های گویا و عبارات جبری + تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "فصل ۲ شیمی ۱ + تست، حداقل ۱۵۰ تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۱۰", title: "تست فصل ۲ هندسه ۱" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "فیزیک ۳" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "عمومی پایه" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "تست فصل ۲ فیزیک ۱" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "تکمیل تست‌های ریاضی" }
        ]
    },

    {
        day: "سه‌شنبه", date: "۱۷ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "فصل ۲ شیمی ۱ + تست، حداقل ۱۵۰ تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "تست فصل ۲ فیزیک ۱، حداقل ۸۰ تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۴۰", title: "تست فصل ۳ هندسه ۱" },
            { type: "lesson", time: "۱۵:۵۵ تا ۱۷:۱۰", title: "هندسه ۳" },
            { type: "lesson", time: "۱۷:۲۵ تا ۱۸:۴۰", title: "عمومی پایه" },
            { type: "lesson", time: "۱۸:۵۵ تا ۲۰:۱۰", title: "دوره و تست فصل ۳ فیزیک ۱" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "مرور شیمی ۱" }
        ]
    },

    {
        day: "چهارشنبه", date: "۱۸ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "فصل ۲ شیمی ۱ + تست، حداقل ۱۵۰ تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۱۰", title: "تست فصل ۳ هندسه ۱" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "دوره و تست فصل ۳ فیزیک ۱" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "گسسته" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "عمومی پایه" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "تکمیل تست فیزیک ۱" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "تکمیل تست ریاضی" }
        ]
    },

    {
        day: "پنجشنبه", date: "۱۹ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "فصل ۲ شیمی ۱ + تست، حداقل ۱۵۰ تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "دوره و تست فصل ۳ فیزیک ۱" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "تست فصل ۴ هندسه ۱" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "تست فصل ۴ هندسه ۱" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "فیزیک ۳" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "عمومی پایه" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "مرور فیزیک ۱" }
        ]
    },

    {
        day: "جمعه", date: "۲۰ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "فصل ۲ شیمی ۱ + تست، حداقل ۱۵۰ تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "معادله و نامعادله و معادله درجه ۲ دهم و یازدهم + تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "تکمیلی فصل‌های ۳ و ۴ هندسه ۱" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "تکمیلی فصل‌های ۳ و ۴ هندسه ۱" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "هندسه ۳" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "عمومی پایه" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "دوره و تست فیزیک ۱" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "تکمیل تست هندسه ۱" }
        ]
    },

    {
        day: "شنبه", date: "۲۱ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "مثلثات دهم و یازدهم + تست، حداقل ۱۵۰ تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "فصل ۳ شیمی ۱ + تست، حداقل ۱۵۰ تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "فصل ۴ فیزیک ۱ + تست، حداقل ۵۰ تست" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "دوره و تست فصل ۱ هندسه ۲" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "گسسته" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "عمومی پایه" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "مثلثات + تست" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "تکمیل تست شیمی ۱" }
        ]
    },

    {
        day: "یکشنبه", date: "۲۲ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "مثلثات دهم و یازدهم + تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "فصل ۳ شیمی ۱ + تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "فصل ۴ فیزیک ۱ + تست" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "دوره و تست فصل ۱ هندسه ۲" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "فیزیک ۳" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "عمومی پایه" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "مثلثات + تست" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "مرور فصل ۳ شیمی ۱" }
        ]
    },

    {
        day: "دوشنبه", date: "۲۳ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "مثلثات دهم و یازدهم + تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "فصل ۳ شیمی ۱ + تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "فصل ۴ فیزیک ۱ + تست" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "دوره و تست فصل ۱ هندسه ۲" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "هندسه ۳" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "عمومی پایه" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "مثلثات + تست" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "تکمیل تست فیزیک ۱" }
        ]
    },

    {
        day: "سه‌شنبه", date: "۲۴ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "مثلثات دهم و یازدهم + تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "فصل ۳ شیمی ۱ + تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "فصل ۴ فیزیک ۱ + تست" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "دوره فصل ۲ هندسه ۲" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "گسسته" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "عمومی پایه" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "مثلثات + تست" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "مرور هندسه ۲" }
        ]
    },

    {
        day: "چهارشنبه", date: "۲۵ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "مثلثات دهم و یازدهم + تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "فصل ۳ شیمی ۱ + تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "دوره فصل ۵ فیزیک ۱" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "دوره فصل ۲ هندسه ۲" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "فیزیک ۳" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "عمومی پایه" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "مثلثات + تست" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "تکمیل تست شیمی ۱" }
        ]
    },

    {
        day: "پنجشنبه", date: "۲۶ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "مثلثات دهم و یازدهم + تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "فصل ۳ شیمی ۱ + تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "دوره فصل ۵ فیزیک ۱" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "دوره و تست فصل ۳ هندسه ۲" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "دوره و تست فصل ۳ هندسه ۲" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "هندسه ۳" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "عمومی پایه" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "مرور فیزیک ۱" }
        ]
    },

    {
        day: "جمعه", date: "۲۷ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "مثلثات دهم و یازدهم + تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "فصل ۳ شیمی ۱ + تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "تکمیلی تستی فصل‌های ۲ و ۳ هندسه ۲" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "تکمیلی تستی فصل‌های ۲ و ۳ هندسه ۲" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "گسسته" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "عمومی پایه" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "دوره فیزیک ۱" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "تکمیل تست هندسه ۲" }
        ]
    },

    {
        day: "شنبه", date: "۲۸ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "تابع دهم و یازدهم + نمایی و لگاریتمی + تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "فصل ۱ شیمی ۲ + تست، حداقل ۱۵۰ تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "تست فصل ۵ فیزیک ۱ / تکمیل تست فصل ۴" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "فصل ۱ آمار و احتمال + تست" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "عمومی پایه" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "فیزیک ۳" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "تابع + تست" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "تکمیل تست شیمی ۲" }
        ]
    },

    {
        day: "یکشنبه", date: "۲۹ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "تابع دهم و یازدهم + نمایی و لگاریتمی + تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "فصل ۱ شیمی ۲ + تست، حداقل ۱۵۰ تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "تست فصل ۵ فیزیک ۱ / تکمیل تست فصل ۴" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "احتمال + تست، بخش اول" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "عمومی پایه" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "هندسه ۳" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "تابع + تست" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "تکمیل تست شیمی ۲" }
        ]
    },

    {
        day: "دوشنبه", date: "۳۰ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "تابع دهم و یازدهم + نمایی و لگاریتمی + تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "فصل ۱ شیمی ۲ + تست، حداقل ۱۵۰ تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "تکمیل تست فصل‌های ۲، ۴ و ۵ فیزیک ۱" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "تکمیلی آمار و احتمال" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "عمومی پایه" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "گسسته" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "تابع + تست" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "مرور فیزیک ۱" }
        ]
    },

    {
        day: "سه‌شنبه", date: "۳۱ شهریور",
        items: [
            { type: "meal", time: "۸:۳۰ تا ۹:۱۰", title: "صبحانه" },
            { type: "lesson", time: "۹:۱۰ تا ۱۰:۲۵", title: "تابع دهم و یازدهم + نمایی و لگاریتمی + تست" },
            { type: "lesson", time: "۱۰:۴۰ تا ۱۱:۵۵", title: "فصل ۱ شیمی ۲ + تست، حداقل ۱۵۰ تست" },
            { type: "lesson", time: "۱۲:۱۰ تا ۱۳:۲۵", title: "تکمیل تست فصل‌های ۲، ۴ و ۵ فیزیک ۱" },
            { type: "meal", time: "۱۴:۰۰ تا ۱۴:۴۰", title: "ناهار" },
            { type: "lesson", time: "۱۴:۴۰ تا ۱۵:۵۵", title: "احتمال + تست" },
            { type: "lesson", time: "۱۶:۱۰ تا ۱۷:۲۵", title: "عمومی پایه" },
            { type: "lesson", time: "۱۷:۴۰ تا ۱۸:۵۵", title: "فیزیک ۳" },
            { type: "lesson", time: "۱۹:۱۰ تا ۲۰:۲۵", title: "هندسه ۳ + تست" },
            { type: "meal", time: "۲۱:۰۰ تا ۲۱:۴۰", title: "شام" },
            { type: "lesson", time: "۲۱:۴۰ تا ۲۲:۵۵", title: "جمع‌بندی و تست ترکیبی" }
        ]
    }

];


/* =====================================================
   ۲. توابع کمکی زمان و دسته‌بندی درس
   ===================================================== */

function toEnglishDigits(str) {
    const persian = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
    return String(str).replace(/[۰-۹]/g, d => String(persian.indexOf(d)));
}

function parseClock(t) {
    const clean = toEnglishDigits(t.trim());
    const parts = clean.split(":");
    const h = parseInt(parts[0], 10) || 0;
    const m = parseInt(parts[1], 10) || 0;
    return h * 60 + m;
}

function getPlannedMinutes(timeRange) {
    const parts = timeRange.split("تا").map(s => s.trim());
    if (parts.length !== 2) return 0;
    const start = parseClock(parts[0]);
    const end = parseClock(parts[1]);
    return Math.max(0, end - start);
}

function getSubject(title) {
    const rules = [
        ["جمع‌بندی", "جمع‌بندی و مرور کلی"],
        ["آمار", "آمار و احتمال"],
        ["احتمال", "آمار و احتمال"],
        ["فیزیک ۱", "فیزیک ۱"],
        ["فیزیک ۳", "فیزیک ۳"],
        ["شیمی ۱", "شیمی ۱"],
        ["شیمی ۲", "شیمی ۲"],
        ["هندسه ۱", "هندسه ۱"],
        ["هندسه ۲", "هندسه ۲"],
        ["هندسه ۳", "هندسه ۳"],
        ["گسسته", "گسسته"],
        ["عمومی پایه", "عمومی پایه"]
    ];
    for (const [key, label] of rules) {
        if (title.includes(key)) return label;
    }
    return "ریاضی (دهم و یازدهم)";
}


/* =====================================================
   ۳. ذخیره‌سازی پیشرفت
   ===================================================== */

const STORAGE_KEY = "studyFlowProgressV2";

let savedProgress = loadProgress();

function loadProgress() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (e) {
        return {};
    }
}

function persistProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedProgress));
}


/* =====================================================
   ۴. عناصر HTML
   ===================================================== */

const daysContainer      = document.getElementById("daysContainer");
const advisorDays        = document.getElementById("advisorDays");
const totalDays          = document.getElementById("totalDays");
const completedDays      = document.getElementById("completedDays");
const totalStudy         = document.getElementById("totalStudy");
const progressBar        = document.getElementById("progressBar");
const progressPercent    = document.getElementById("progressPercent");

const advisorProgress    = document.getElementById("advisorProgress");
const advisorCompleted   = document.getElementById("advisorCompleted");
const advisorTotal       = document.getElementById("advisorTotal");
const advisorHours       = document.getElementById("advisorHours");
const advisorTestsTotal  = document.getElementById("advisorTestsTotal");
const circleValue        = document.getElementById("circleValue");
const subjectReport      = document.getElementById("subjectReport");

const toast               = document.getElementById("toast");

const backupBtn            = document.getElementById("backupBtn");
const restoreInput         = document.getElementById("restoreInput");
const pdfBtn                = document.getElementById("pdfBtn");
const printReport           = document.getElementById("printReport");

const registerModal    = document.getElementById("registerModal");
const modalTitle        = document.getElementById("modalTitle");
const studiedBtn         = document.getElementById("studiedBtn");
const notStudiedBtn      = document.getElementById("notStudiedBtn");
const studyDetails       = document.getElementById("studyDetails");
const minutesInput       = document.getElementById("minutesInput");
const testsInput         = document.getElementById("testsInput");
const confirmStudyBtn    = document.getElementById("confirmStudyBtn");
const closeModalBtn      = document.getElementById("closeModalBtn");

const themeBtn = document.getElementById("themeBtn");


/* =====================================================
   ۵. ساخت روزها (کشویی)
   ===================================================== */

function renderDays() {

    daysContainer.innerHTML = "";

    studyPlan.forEach((day, dayIndex) => {

        const card = document.createElement("article");
        card.className = "day-card";

        let lessonTotal = 0;
        let lessonStudied = 0;

        day.items.forEach((it, idx) => {
            if (it.type === "lesson") {
                lessonTotal++;
                if (savedProgress[`${dayIndex}-${idx}`]?.status === "studied") {
                    lessonStudied++;
                }
            }
        });

        const dayPercent = lessonTotal
            ? Math.round((lessonStudied / lessonTotal) * 100)
            : 0;

        card.innerHTML = `

            <button class="day-header" type="button" aria-expanded="false">

                <div class="day-number">${dayIndex + 1}</div>

                <div class="day-info">
                    <strong class="neon-text">${day.day}</strong>
                    <small>${day.date}</small>
                </div>

                <div class="day-status">
                    <span class="day-percent ${dayPercent === 100 ? "full" : ""}">${dayPercent}%</span>
                    <span class="day-count">${lessonTotal} درس</span>
                </div>

                <div class="arrow">⌄</div>

            </button>

            <div class="day-content">
                <div class="day-inner">
                    ${day.items.map((item, itemIndex) => renderItem(dayIndex, item, itemIndex)).join("")}
                </div>
            </div>
        `;

        const header = card.querySelector(".day-header");
        header.addEventListener("click", () => {
            const isOpen = card.classList.toggle("open");
            header.setAttribute("aria-expanded", isOpen);
        });

        card.addEventListener("click", handleCardClick);

        daysContainer.appendChild(card);
    });
}


/* =====================================================
   ۶. ساخت هر ردیف (درس یا وعده‌ی غذایی)
   ===================================================== */

function renderItem(dayIndex, item, itemIndex) {

    if (item.type === "meal") {
        return `
            <div class="meal-row">
                <div class="meal-icon">🍽️</div>
                <div class="meal-info">
                    <strong>${item.title}</strong>
                    <small>${item.time}</small>
                </div>
                <span class="meal-tag">فقط نمایشی</span>
            </div>
        `;
    }

    const key = `${dayIndex}-${itemIndex}`;
    const progress = savedProgress[key];
    const planned = getPlannedMinutes(item.time);

    let statusHtml = `<span class="status-pending">هنوز ثبت نشده</span>`;
    let rowClass = "";

    if (progress && progress.status === "studied") {
        statusHtml = `<span class="status-done">✅ ${progress.minutes} دقیقه · ${progress.tests} تست</span>`;
        rowClass = "is-studied";
    } else if (progress && progress.status === "not_studied") {
        statusHtml = `<span class="status-skip">❌ خونده نشد</span>`;
        rowClass = "is-skipped";
    }

    return `
        <div class="lesson-row ${rowClass}">
            <div class="lesson-info">
                <strong>${item.title}</strong>
                <small>${item.time} · ${planned} دقیقه برنامه</small>
                <div class="lesson-result">${statusHtml}</div>
            </div>
            <button class="btn-register" data-day="${dayIndex}" data-item="${itemIndex}" type="button">
                ثبت
            </button>
        </div>
    `;
}


/* =====================================================
   ۷. باز کردن مودال ثبت با کلیک روی دکمه
   ===================================================== */

function handleCardClick(event) {
    const btn = event.target.closest(".btn-register");
    if (!btn) return;

    const dayIndex = Number(btn.dataset.day);
    const itemIndex = Number(btn.dataset.item);
    openRegisterModal(dayIndex, itemIndex);
}


/* =====================================================
   ۸. مودال ثبت وضعیت درس
   ===================================================== */

let currentDayIndex = null;
let currentItemIndex = null;

function openRegisterModal(dayIndex, itemIndex) {

    currentDayIndex = dayIndex;
    currentItemIndex = itemIndex;

    const item = studyPlan[dayIndex].items[itemIndex];
    modalTitle.textContent = item.title;

    studyDetails.classList.add("hidden");
    minutesInput.value = "";
    testsInput.value = "";

    const key = `${dayIndex}-${itemIndex}`;
    const progress = savedProgress[key];

    if (progress && progress.status === "studied") {
        studyDetails.classList.remove("hidden");
        minutesInput.value = progress.minutes;
        testsInput.value = progress.tests;
    }

    registerModal.classList.add("show");
}

function closeRegisterModal() {
    registerModal.classList.remove("show");
    currentDayIndex = null;
    currentItemIndex = null;
}

studiedBtn.addEventListener("click", () => {
    studyDetails.classList.remove("hidden");
    minutesInput.focus();
});

notStudiedBtn.addEventListener("click", () => {
    saveRegistration("not_studied", 0, 0);
});

confirmStudyBtn.addEventListener("click", () => {
    const minutes = Math.max(0, parseInt(minutesInput.value, 10) || 0);
    const tests = Math.max(0, parseInt(testsInput.value, 10) || 0);
    saveRegistration("studied", minutes, tests);
});

closeModalBtn.addEventListener("click", closeRegisterModal);

registerModal.addEventListener("click", (event) => {
    if (event.target === registerModal) {
        closeRegisterModal();
    }
});

function saveRegistration(status, minutes, tests) {

    const key = `${currentDayIndex}-${currentItemIndex}`;

    savedProgress[key] = { status, minutes, tests };
    persistProgress();

    closeRegisterModal();

    renderDays();
    updateStatistics();

    showToast(
        status === "studied"
            ? "ثبت شد ✓ آفرین!"
            : "ثبت شد، دفعه‌ی بعد بخون 💪"
    );
}


/* =====================================================
   ۹. محاسبه‌ی آمار کلی
   ===================================================== */

function getAllLessons() {
    const lessons = [];
    studyPlan.forEach((day, dayIndex) => {
        day.items.forEach((item, itemIndex) => {
            if (item.type === "lesson") {
                lessons.push({ dayIndex, itemIndex, item, key: `${dayIndex}-${itemIndex}` });
            }
        });
    });
    return lessons;
}

function calculateStatistics() {

    const lessons = getAllLessons();

    let studiedCount = 0;
    let notStudiedCount = 0;
    let totalMinutes = 0;
    let totalTests = 0;
    let totalPlannedMinutes = 0;

    const perDay = studyPlan.map(() => ({ studied: 0, total: 0, minutes: 0, planned: 0, tests: 0 }));
    const perSubject = {};

    lessons.forEach(({ dayIndex, item, key }) => {

        const planned = getPlannedMinutes(item.time);
        totalPlannedMinutes += planned;

        perDay[dayIndex].total++;
        perDay[dayIndex].planned += planned;

        const subject = getSubject(item.title);

        if (!perSubject[subject]) {
            perSubject[subject] = { planned: 0, minutes: 0, tests: 0, studied: 0, total: 0 };
        }

        perSubject[subject].total++;
        perSubject[subject].planned += planned;

        const progress = savedProgress[key];

        if (progress && progress.status === "studied") {
            studiedCount++;
            totalMinutes += progress.minutes;
            totalTests += progress.tests;

            perDay[dayIndex].studied++;
            perDay[dayIndex].minutes += progress.minutes;
            perDay[dayIndex].tests += progress.tests;

            perSubject[subject].studied++;
            perSubject[subject].minutes += progress.minutes;
            perSubject[subject].tests += progress.tests;

        } else if (progress && progress.status === "not_studied") {
            notStudiedCount++;
        }
    });

    return {
        totalLessons: lessons.length,
        studiedCount,
        notStudiedCount,
        totalMinutes,
        totalTests,
        totalPlannedMinutes,
        perDay,
        perSubject
    };
}


/* =====================================================
   ۱۰. به‌روزرسانی آمار در صفحه
   ===================================================== */

function updateStatistics() {

    const stats = calculateStatistics();

    const percent = stats.totalLessons === 0
        ? 0
        : Math.round((stats.studiedCount / stats.totalLessons) * 100);

    const hours = Math.floor(stats.totalMinutes / 60);
    const minsRemainder = stats.totalMinutes % 60;

    const completedDaysCount = stats.perDay.filter(
        d => d.total > 0 && d.studied === d.total
    ).length;

    totalDays.textContent = studyPlan.length;
    completedDays.textContent = completedDaysCount;
    totalStudy.textContent = `${hours}h ${minsRemainder}m`;

    progressPercent.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;

    advisorProgress.textContent = `${percent}%`;
    advisorCompleted.textContent = completedDaysCount;
    advisorTotal.textContent = studyPlan.length;
    advisorHours.textContent = `${hours} ساعت و ${minsRemainder} دقیقه`;
    advisorTestsTotal.textContent = stats.totalTests;
    circleValue.style.width = `${percent}%`;

    renderAdvisorDays(stats);
    renderSubjectReport(stats);
}


/* =====================================================
   ۱۱. گزارش روزهای مشاور
   ===================================================== */

function renderAdvisorDays(stats) {

    advisorDays.innerHTML = "";

    studyPlan.forEach((day, dayIndex) => {

        const d = stats.perDay[dayIndex];
        const percent = d.total ? Math.round((d.studied / d.total) * 100) : 0;

        const statusClass = percent === 100 ? "done" : percent === 0 ? "not-done" : "partial";

        const item = document.createElement("div");
        item.className = "advisor-day";

        item.innerHTML = `
            <div class="advisor-day-number">${dayIndex + 1}</div>

            <div class="advisor-day-info">
                <strong>${day.day}</strong>
                <small>${day.date} · ${d.minutes} از ${d.planned} دقیقه · ${d.tests} تست</small>
            </div>

            <div class="${statusClass}">${percent}%</div>
        `;

        advisorDays.appendChild(item);
    });
}


/* =====================================================
   ۱۲. گزارش بر اساس درس
   ===================================================== */

function renderSubjectReport(stats) {

    subjectReport.innerHTML = "";

    Object.entries(stats.perSubject).forEach(([subject, data]) => {

        const percent = data.total ? Math.round((data.studied / data.total) * 100) : 0;

        const row = document.createElement("div");
        row.className = "subject-row";

        row.innerHTML = `
            <div class="subject-top">
                <span class="subject-name">${subject}</span>
                <span class="subject-percent">${percent}%</span>
            </div>

            <div class="subject-bar-wrap">
                <div class="subject-bar" style="width:${percent}%"></div>
            </div>

            <div class="subject-meta">
                ${data.minutes} از ${data.planned} دقیقه مطالعه · ${data.tests} تست زده شده
            </div>
        `;

        subjectReport.appendChild(row);
    });
}


/* =====================================================
   ۱۳. Toast
   ===================================================== */

let toastTimer;

function showToast(message) {

    toast.querySelector("p").textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
}


/* =====================================================
   ۱۴. تب‌های برنامه
   ===================================================== */

document.querySelectorAll(".tab").forEach(tab => {

    tab.addEventListener("click", () => {

        const pageName = tab.dataset.page;

        document.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
        document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(pageName).classList.add("active");
    });
});


/* =====================================================
   ۱۵. دکمه‌ی تغییر ظاهر
   ===================================================== */

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    themeBtn.textContent = document.body.classList.contains("light-mode")
        ? "🌙"
        : "☀";
});


/* =====================================================
   ۱۶. پشتیبان‌گیری و بازیابی اطلاعات
   ===================================================== */

backupBtn.addEventListener("click", () => {

    const data = {
        app: "StudyFlow",
        exportedAt: new Date().toISOString(),
        progress: savedProgress
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

    const a = document.createElement("a");
    a.href = url;
    a.download = `studyflow-backup-${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);

    showToast("فایل پشتیبان دانلود شد ✓");
});

restoreInput.addEventListener("change", (event) => {

    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
        try {
            const parsed = JSON.parse(reader.result);

            const incoming = (parsed && typeof parsed === "object" && parsed.progress)
                ? parsed.progress
                : parsed;

            if (typeof incoming !== "object" || incoming === null) {
                throw new Error("invalid backup file");
            }

            savedProgress = incoming;
            persistProgress();

            renderDays();
            updateStatistics();

            showToast("بازیابی اطلاعات انجام شد ✓");

        } catch (e) {
            showToast("فایل پشتیبان معتبر نیست ✗");
        }

        restoreInput.value = "";
    };

    reader.readAsText(file);
});


/* =====================================================
   ۱۷. خروجی PDF (چاپ گزارش با تم اختصاصی)
   ===================================================== */

pdfBtn.addEventListener("click", () => {

    buildPrintReport();

    const originalTitle = document.title;
    document.title = "گزارش-مطالعاتی-StudyFlow";

    window.print();

    setTimeout(() => {
        document.title = originalTitle;
    }, 500);
});

function buildPrintReport() {

    const stats = calculateStatistics();

    const percent = stats.totalLessons === 0
        ? 0
        : Math.round((stats.studiedCount / stats.totalLessons) * 100);

    const hours = Math.floor(stats.totalMinutes / 60);
    const mins = stats.totalMinutes % 60;

    const completedDaysCount = stats.perDay.filter(
        d => d.total > 0 && d.studied === d.total
    ).length;

    const subjectRows = Object.entries(stats.perSubject).map(([subject, data]) => {
        const p = data.total ? Math.round((data.studied / data.total) * 100) : 0;
        return `
            <tr>
                <td>${subject}</td>
                <td>${p}%</td>
                <td>${data.minutes} از ${data.planned} دقیقه</td>
                <td>${data.tests}</td>
            </tr>
        `;
    }).join("");

    const dayRows = studyPlan.map((day, dayIndex) => {
        const d = stats.perDay[dayIndex];
        const p = d.total ? Math.round((d.studied / d.total) * 100) : 0;
        return `
            <tr>
                <td>${day.day} ${day.date}</td>
                <td>${p}%</td>
                <td>${d.minutes} از ${d.planned} دقیقه</td>
                <td>${d.tests}</td>
            </tr>
        `;
    }).join("");

    printReport.innerHTML = `
        <div class="print-header">
            <div class="print-brand">⚡ StudyFlow</div>
            <h1>گزارش مطالعاتی</h1>
            <p>تاریخ خروجی: ${new Date().toLocaleDateString("fa-IR")}</p>
        </div>

        <div class="print-summary">
            <div><span>درصد کل پیشرفت</span><strong>${percent}%</strong></div>
            <div><span>روزهای کامل شده</span><strong>${completedDaysCount} از ${studyPlan.length}</strong></div>
            <div><span>زمان مطالعه</span><strong>${hours} ساعت و ${mins} دقیقه</strong></div>
            <div><span>تعداد کل تست</span><strong>${stats.totalTests}</strong></div>
        </div>

        <h2>گزارش بر اساس درس</h2>
        <table>
            <thead><tr><th>درس</th><th>درصد</th><th>زمان مطالعه</th><th>تعداد تست</th></tr></thead>
            <tbody>${subjectRows}</tbody>
        </table>

        <h2>گزارش بر اساس روز</h2>
        <table>
            <thead><tr><th>روز</th><th>درصد</th><th>زمان مطالعه</th><th>تعداد تست</th></tr></thead>
            <tbody>${dayRows}</tbody>
        </table>
    `;
}


/* =====================================================
   ۱۸. شروع برنامه
   ===================================================== */

renderDays();
updateStatistics();
