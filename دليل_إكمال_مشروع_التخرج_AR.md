# دليل إكمال مشروع التخرج – Paradise Nursery (IBM/Coursera)

> هذا المشروع خاص بـ **Final Project: Paradise Nursery Shopping Application**، وليس مشروع الممارسة Conference Expense Planner.

## 1. ماذا أنجزنا؟

- 3 صفحات: الصفحة الرئيسية، عرض النباتات، سلة التسوق.
- 18 نبتة مختلفة موزعة على 3 فئات، بواقع 6 نباتات في كل فئة.
- صورة واسم ووصف وسعر لكل نبتة.
- Redux Toolkit لإضافة النباتات وتغيير الكميات والحذف وحساب الإجماليات.
- زر Add to Cart يتعطل بعد الإضافة، ويعود للعمل بعد حذف النبات أو تقليل كميته إلى صفر.
- رأس تنقل مشترك بين صفحة النباتات والسلة مع عداد متغير.
- زرا Get Started وContinue Shopping يعملان.
- زر Checkout يعرض Checkout coming soon!
- صور محلية، وتصميم متجاوب، وحفظ السلة عند تحديث الصفحة، وملفات النشر لـGitHub Pages.
- ملفات التقييم المطلوبة: `README.md` و`src/AboutUs.jsx` و`src/App.css` و`src/App.jsx` و`src/CartSlice.jsx` و`src/ProductList.jsx` و`src/CartItem.jsx`.

## 2. فك المشروع داخل IBM Skills Network Cloud IDE

1. افتح مختبر **Final Project: Paradise Nursery Shopping Application** ثم اضغط **Launch / تشغيل التطبيق**.
2. في Cloud IDE افتح مستكشف الملفات Explorer (رمز الملفات يسارًا).
3. ارفع ملف `e-plantShopping.zip` عبر خيار **Upload Files** في مستكشف الملفات، إن كان متاحًا. اختر المجلد `/home/project` إن أمكن، وتحقق من مكان رفع الملف باستخدام `pwd` أو المستكشف.
4. افتح **Terminal > New Terminal**، وانتقل إلى المجلد الذي رفعت فيه الملف. إذا كان داخل `/home/project` استخدم:

```bash
cd /home/project
unzip e-plantShopping.zip
cd e-plantShopping
```

> يتضمن ZIP مجلدًا واحدًا باسم `e-plantShopping`. لا تفك محتوياته فوق مشروع مختبر موجود؛ افتحه كمجلد جديد حتى لا تستبدل ملفاتك الحالية.

5. ثبّت الحزم وشغّل التطبيق:

```bash
npm install
npm run dev -- --host 0.0.0.0
```

6. افتح رابط المتصفح الذي يظهر في Terminal، أو افتح منفذ **5173** من نافذة Ports / Preview في Cloud IDE. قد يكون المسار `/e-plantShopping/` بسبب إعدادات النشر.
7. لإنهاء تشغيل الخادم في Terminal اضغط `Ctrl+C`.

## 3. تأكد أن المشروع يبني بنجاح

```bash
npm run build
```

النتيجة الطبيعية هي إنشاء مجلد `dist/` وعدم ظهور أخطاء بناء. إذا ظهر خطأ، انسخه كاملًا وراجع الإصلاح قبل النشر.

## 4. إنشاء المستودع ورفع المشروع

1. سجّل الدخول إلى GitHub.
2. أنشئ مستودعًا **Public** باسم **`e-plantShopping`** بالضبط.
3. عند إنشاء المستودع، لا تُنشئ README أو .gitignore جديدة؛ المشروع يتضمنهما مسبقًا.
4. من Terminal تأكد أنك داخل مجلد مشروعنا:

```bash
cd /home/project/e-plantShopping
```

5. نفّذ التالي، مع تغيير `YOUR_GITHUB_USERNAME` إلى اسم مستخدم GitHub الخاص بك:

```bash
git init
git branch -M main
git add .
git commit -m "Complete Paradise Nursery React final project"
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping.git
git push -u origin main
```

**مهم:** في حال كان هناك remote باسم origin مسبقًا، افحصه أولًا بـ `git remote -v`، ثم استخدم `git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping.git` بدلاً من `git remote add origin ...`.

إذا طلب GitHub تسجيل الدخول، استخدم آلية GitHub الرسمية أو Personal Access Token بصلاحيات المستودع وفقًا لإرشادات GitHub. لا ترسل رمز الوصول أو كلمة المرور لأي شخص.

## 5. نشر المشروع على GitHub Pages

1. افتح المستودع في GitHub ثم **Settings > Pages**.
2. من **Build and deployment** اختر **Source: GitHub Actions**.
3. افتح تبويب **Actions**، وابحث عن `Deploy Paradise Nursery to GitHub Pages`.
4. إذا لم يبدأ التنفيذ، اختر workflow ثم **Run workflow** بعد التأكد من ضبط مصدر Pages.
5. انتظر نجاح جميع خطوات النشر، ثم افتح:

`https://YOUR_GITHUB_USERNAME.github.io/e-plantShopping/`

إذا غيّرت اسم المستودع، عدّل القيمة `base` في `vite.config.js`، وإلا فلن تعمل الروابط والملفات بشكل صحيح.

## 6. روابط التسليم للخيار الأول AI-Graded

يطلب منك Coursera فتح التقييم وإدخال **روابط الملفات العامة**، وليس روابط الملفات الموجودة على جهازك. استبدل `YOUR_GITHUB_USERNAME` باسمك:

| المطلوب | الرابط الذي تقدمه بعد الاستبدال |
|---|---|
| README.md | `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/README.md` |
| AboutUs.jsx | `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/AboutUs.jsx` |
| App.css | `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/App.css` |
| App.jsx | `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/App.jsx` |
| CartSlice.jsx | `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/CartSlice.jsx` |
| ProductList.jsx | `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/ProductList.jsx` |
| CartItem.jsx | `https://github.com/YOUR_GITHUB_USERNAME/e-plantShopping/blob/main/src/CartItem.jsx` |

للمراجعة، احتفظ أيضًا برابط المستودع نفسه وبالرابط المنشور. تنص تفاصيل المختبر على أن الخيار الثاني Peer-Graded يتطلب **رابط التطبيق المنشور + رابط مستودع GitHub العام**.

## 7. اختبار يدوي قبل التسليم

- [ ] افتح الصفحة الرئيسية، وتأكد من ظهور اسم Paradise Nursery، فقرة About Us، الخلفية وزر Get Started.
- [ ] اضغط Get Started؛ يفتح قائمة النباتات.
- [ ] تأكد من وجود 3 أقسام، في كل منها 6 نباتات بصورة واسم وسعر.
- [ ] اضغط Add to Cart لنبتة؛ يتغير الزر إلى Added to Cart ويصبح غير قابل للنقر.
- [ ] راقب ارتفاع عداد السلة إلى 1.
- [ ] أضف نبتة أخرى؛ يرتفع العداد إلى 2.
- [ ] اضغط Cart، وتأكد من ظهور المنتجات المحددة الصحيحة.
- [ ] اضغط + لأحد النباتات؛ تتحول كميته إلى 2 ويزيد العدد في الرأس ويزيد الإجمالي.
- [ ] اضغط −؛ تعود الكمية إلى 1 وتتناقص القيم.
- [ ] اضغط − مرة أخرى عندما تكون الكمية 1؛ تختفي النبتة من السلة ويُعاد تفعيل Add to Cart لها.
- [ ] اضغط Delete لنبتة وتأكد من حذفها وتحديث العداد والمجموع.
- [ ] اضغط Continue Shopping، ثم جرب إعادة إضافة النبتة المحذوفة.
- [ ] اضغط Checkout؛ تظهر رسالة Checkout coming soon!
- [ ] حدّث الصفحة؛ السلة باقية بفضل localStorage.
- [ ] افتح رابط GitHub Pages في نافذة خاصة للتأكد من أنه عام وليس معتمدًا على جلسة تسجيل دخول.
- [ ] افتح روابط الملفات السبعة المطلوبة وتأكد من أنها لا تعرض خطأ 404.

## 8. الأسئلة الشائعة

**هل المشروع التدريبي إلزامي؟**

المختبر يقول إنه prerequisite وموصى بإكماله قبل المشروع النهائي، لكن متطلبات التسليم التي نقلتها تخص مشروع Paradise Nursery. راجع حالة المختبر والواجب في Coursera للتأكد من إكمال عناصر التعلم المطلوبة.

**هل أرفع ملف ZIP إلى GitHub كما هو؟**

لا. فك الضغط أولًا، ثم ارفع الملفات والمجلدات. يجب أن تكون الملفات السبعة قابلة للفتح بشكل مباشر من GitHub.

**لماذا صفحة GitHub Pages فارغة؟**

راجع نجاح Actions، واسم المستودع `e-plantShopping`، وإعداد `base` في Vite. افتح Console في المتصفح وابحث عن خطأ 404 لملفات JavaScript أو CSS.

**ماذا لو تعطل npm install أو npm run build؟**

انسخ آخر 30-50 سطرًا من Terminal وأرسلها للمراجعة. لا ترفع المشروع للتقييم حتى ينجح البناء وتعمل الصفحات الثلاث.

**هل هذا كود يمكنني تسليمه مباشرة؟**

هذا مشروع مرجعي تعليمي متكامل لتنفيذ المتطلبات. راجع كوده وجرّب كل الوظائف وافهم Redux والمكونات قبل تقديم عملك النهائي، والتزم بسياسة النزاهة الأكاديمية الخاصة بالدورة.
