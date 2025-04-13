
                                                        // تنظیم وضعیت اولیه
                                                        document.addEventListener('DOMContentLoaded', function() {
                                                            // فعال‌سازی انیمیشن‌های صفحه درباره ما
                                                            const sections = document.querySelectorAll('.reveal-section');
                                                            sections.forEach(section => {
                                                                section.classList.add('active');
                                                            });

                                                            // فعال‌سازی نمودار درصد کدها
                                                            const chartBars = document.querySelectorAll('.chart-bar');
                                                            chartBars.forEach(bar => {
                                                                bar.classList.add('animated');
                                                            });

                                                            // رسم نمودار در صفحه رسم نمودار
                                                            setupGraph();
                                                        });

                                                        // نمایش/مخفی‌سازی منوی تنظیمات
                                                        function toggleSettingsMenu() {
                                                            const settingsIcon = document.getElementById('settingsIcon');
                                                            const settingsMenu = document.getElementById('settingsMenu');

                                                            settingsIcon.classList.toggle('active');
                                                            settingsMenu.classList.toggle('active');
                                                        }

                                                        // نمایش صفحه درباره ما
                                                        function showAboutPage() {
                                                            document.getElementById('aboutPage').classList.add('active');
                                                            toggleSettingsMenu();
                                                        }

                                                        // بستن صفحه درباره ما
                                                        function closeAboutPage() {
                                                            document.getElementById('aboutPage').classList.remove('active');
                                                        }

                                                        // نمایش صفحه محاسبات
                                                        function showCalculationPage() {
                                                            document.getElementById('calculationPage').classList.add('active');
                                                        }

                                                        // بستن صفحه محاسبات
                                                        function closeCalculationPage() {
                                                            document.getElementById('calculationPage').classList.remove('active');
                                                        }

                                                        // نمایش صفحه رسم نمودار
                                                        function showGraphPage() {
                                                            document.getElementById('graphPage').classList.add('active');
                                                            setTimeout(() => {
                                                                setupGraph();
                                                            }, 500);
                                                        }

                                                        // بستن صفحه رسم نمودار
                                                        function closeGraphPage() {
                                                            document.getElementById('graphPage').classList.remove('active');
                                                        }
  // تغییر تم روشن/تاریک
function toggleTheme() {
  const body = document.body;
  const themeAnimation = document.getElementById('themeAnimation');
  const themeBall = document.getElementById('themeBall');

  // نمایش انیمیشن
  themeAnimation.classList.add('active');

  // تغییر حالت توپ (خورشید/ماه)
  if (body.classList.contains('dark-theme')) {
    themeBall.classList.remove('moon');
    themeBall.classList.add('sun');

    // انیمیشن حرکت به سمت خورشید - مسیر بزرگتر
    themeBall.style.transform = 'translateY(-150px)';

    setTimeout(() => {
      body.classList.remove('dark-theme');
      themeAnimation.classList.remove('active');
      themeBall.style.transform = 'translateY(0)';
    }, 1200); // زمان کمی افزایش یافت
  } else {
    themeBall.classList.remove('sun');
    themeBall.classList.add('moon');

    // انیمیشن حرکت به سمت ماه - مسیر بزرگتر
    themeBall.style.transform = 'translateY(-150px)';

    setTimeout(() => {
      body.classList.add('dark-theme');
      themeAnimation.classList.remove('active');
      themeBall.style.transform = 'translateY(0)';
    }, 1200); // زمان کمی افزایش یافت
  }
}


                                                        // تغییر زبان سایت
                                                        function toggleLanguage() {
                                                            const html = document.documentElement;
                                                            html.setAttribute('lang', html.getAttribute('lang') === 'fa' ? 'en' : 'fa');
                                                            toggleSettingsMenu();
                                                        }

                                                      // توابع ماشین حساب مهندسی
let currentInput = '0';
let calculationHistory = '';

function updateCalculatorDisplay() {
  document.getElementById('calculatorDisplay').textContent = currentInput;
  document.getElementById('calculatorHistory').textContent = calculationHistory;
}

function calculatorAppend(value) {
  if (currentInput === '0') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateCalculatorDisplay();
}

function calculatorOperation(op) {
  currentInput += op;
  updateCalculatorDisplay();
}

function calculatorFunction(func) {
  switch(func) {
    case 'sin':
      currentInput += 'Math.sin(';
      break;
    case 'cos':
      currentInput += 'Math.cos(';
      break;
    case 'tan':
      currentInput += 'Math.tan(';
      break;
    case 'log':
      currentInput += 'Math.log10(';
      break;
    case 'ln':
      currentInput += 'Math.log(';
      break;
    case 'sqrt':
      currentInput += 'Math.sqrt(';
      break;
    case 'pow':
      currentInput += '^';
      break;
    case 'abs':
      currentInput += 'Math.abs(';
      break;
  }
  updateCalculatorDisplay();
}

function calculatorConstant(constant) {
  switch(constant) {
    case 'pi':
      currentInput += 'Math.PI';
      break;
    case 'e':
      currentInput += 'Math.E';
      break;
  }
  updateCalculatorDisplay();
}

function calculatorClear() {
  currentInput = '0';
  calculationHistory = '';
  updateCalculatorDisplay();
}

function calculatorBackspace() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = '0';
  }
  updateCalculatorDisplay();
}

function calculatorCalculate() {
  try {
    // جایگزینی ^ با ** برای توان
    let expression = currentInput.replace(/\^/g, '**');

    // ارزیابی عبارت
    let result = eval(expression);

    // اضافه کردن به تاریخچه
    calculationHistory = currentInput + ' = ';
    currentInput = result.toString();
    updateCalculatorDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateCalculatorDisplay();
    setTimeout(() => {
      currentInput = '0';
      updateCalculatorDisplay();
    }, 2000);
  }
}

// محاسبات هندسی
function calculateCircle() {
  const radius = parseFloat(document.getElementById('circleRadius').value);
  const area = Math.PI * radius * radius;
  const perimeter = 2 * Math.PI * radius;

  document.getElementById('circleArea').textContent = area.toFixed(2) + ' cm²';
  document.getElementById('circlePerimeter').textContent = perimeter.toFixed(2) + ' cm';
}

function calculateRectangle() {
  const width = parseFloat(document.getElementById('rectangleWidth').value);
  const height = parseFloat(document.getElementById('rectangleHeight').value);

  const area = width * height;
  const perimeter = 2 * (width + height);

  document.getElementById('rectangleArea').textContent = area.toFixed(2) + ' cm²';
  document.getElementById('rectanglePerimeter').textContent = perimeter.toFixed(2) + ' cm';
}

function calculateTriangle() {
  const a = parseFloat(document.getElementById('triangleSideA').value);
  const b = parseFloat(document.getElementById('triangleSideB').value);
  const c = parseFloat(document.getElementById('triangleSideC').value);

  // بررسی نامساوی مثلث
  if (a + b <= c || a + c <= b || b + c <= a) {
    document.getElementById('triangleArea').textContent = 'خطا: اضلاع نامعتبر';
    document.getElementById('trianglePerimeter').textContent = 'خطا: اضلاع نامعتبر';
    return;
  }

  const perimeter = a + b + c;
  const s = perimeter / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // فرمول هرون

  document.getElementById('triangleArea').textContent = area.toFixed(2) + ' cm²';
  document.getElementById('trianglePerimeter').textContent = perimeter.toFixed(2) + ' cm';
}

function calculateEllipse() {
  const a = parseFloat(document.getElementById('ellipseMajor').value);
  const b = parseFloat(document.getElementById('ellipseMinor').value);

  const area = Math.PI * a * b;
  // تقریب محیط بیضی با فرمول رامانوجان
  const perimeter = Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));

  document.getElementById('ellipseArea').textContent = area.toFixed(2) + ' cm²';
  document.getElementById('ellipsePerimeter').textContent = perimeter.toFixed(2) + ' cm';
}

function calculateTrapezoid() {
  const a = parseFloat(document.getElementById('trapezoidUpperBase').value);
  const b = parseFloat(document.getElementById('trapezoidLowerBase').value);
  const h = parseFloat(document.getElementById('trapezoidHeight').value);
  const c = parseFloat(document.getElementById('trapezoidLeftSide').value);
  const d = parseFloat(document.getElementById('trapezoidRightSide').value);

  const area = (a + b) * h / 2;
  const perimeter = a + b + c + d;

  document.getElementById('trapezoidArea').textContent = area.toFixed(2) + ' cm²';
  document.getElementById('trapezoidPerimeter').textContent = perimeter.toFixed(2) + ' cm';
}

// حل معادلات
function solveLinearEquation() {
  const a = parseFloat(document.getElementById('linearA').value);
  const b = parseFloat(document.getElementById('linearB').value);

  if (a === 0) {
    document.getElementById('linearSolution').textContent = 'خطا: ضریب a نمی‌تواند صفر باشد';
    return;
  }

  const x = -b / a;
  document.getElementById('linearSolution').textContent = 'x = ' + x.toFixed(4);
}

function solveQuadraticEquation() {
  const a = parseFloat(document.getElementById('quadraticA').value);
  const b = parseFloat(document.getElementById('quadraticB').value);
  const c = parseFloat(document.getElementById('quadraticC').value);

  if (a === 0) {
    document.getElementById('quadraticDiscriminant').textContent = 'خطا: ضریب a نمی‌تواند صفر باشد';
    document.getElementById('quadraticSolution1').textContent = '-';
    document.getElementById('quadraticSolution2').textContent = '-';
    return;
  }

  const discriminant = b * b - 4 * a * c;
  document.getElementById('quadraticDiscriminant').textContent = discriminant.toFixed(4);

  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    document.getElementById('quadraticSolution1').textContent = 'x₁ = ' + x1.toFixed(4);
    document.getElementById('quadraticSolution2').textContent = 'x₂ = ' + x2.toFixed(4);
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    document.getElementById('quadraticSolution1').textContent = 'x = ' + x.toFixed(4);
    document.getElementById('quadraticSolution2').textContent = '(ریشه مضاعف)';
  } else {
    const realPart = -b / (2 * a);
    const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    document.getElementById('quadraticSolution1').textContent = 'x₁ = ' + realPart.toFixed(2) + ' + ' + imaginaryPart.toFixed(2) + 'i';
    document.getElementById('quadraticSolution2').textContent = 'x₂ = ' + realPart.toFixed(2) + ' - ' + imaginaryPart.toFixed(2) + 'i';
  }
}

function solveCubicEquation() {
  const a = parseFloat(document.getElementById('cubicA').value);
  const b = parseFloat(document.getElementById('cubicB').value);
  const c = parseFloat(document.getElementById('cubicC').value);
  const d = parseFloat(document.getElementById('cubicD').value);

  if (a === 0) {
    document.getElementById('cubicSolution').textContent = 'خطا: ضریب a نمی‌تواند صفر باشد';
    return;
  }

  // استفاده از روش کاردانو برای حل معادله درجه سوم
  // تبدیل به فرم استاندارد x³ + px + q = 0
  const p = (3 * a * c - b * b) / (3 * a * a);
  const q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);

  const discriminant = 4 * p * p * p + 27 * q * q;

  let result = '';

  if (discriminant > 0) {
    // یک ریشه حقیقی و دو ریشه مختلط
    const u = Math.cbrt(-q/2 + Math.sqrt(q*q/4 + p*p*p/27));
    const v = Math.cbrt(-q/2 - Math.sqrt(q*q/4 + p*p*p/27));

    const x1 = u + v - b/(3*a);
    const realPart = -(u + v)/2 - b/(3*a);
    const imaginaryPart = Math.sqrt(3)*(u - v)/2;

    result = 'x₁ = ' + x1.toFixed(4) + ', x₂ = ' + realPart.toFixed(4) + ' + ' + imaginaryPart.toFixed(4) + 'i, x₃ = ' + realPart.toFixed(4) + ' - ' + imaginaryPart.toFixed(4) + 'i';
  } else if (discriminant === 0) {
    // سه ریشه حقیقی که حداقل دو تای آنها برابرند
    const u = Math.cbrt(-q/2);
    const x1 = 2 * u - b/(3*a);
    const x2 = -u - b/(3*a);

    result = 'x₁ = ' + x1.toFixed(4) + ', x₂ = x₃ = ' + x2.toFixed(4);
  } else {
    // سه ریشه حقیقی متمایز
    const r = Math.sqrt(-p*p*p/27);
    const theta = Math.acos(-q/(2*r));

    const x1 = 2 * Math.cbrt(r) * Math.cos(theta/3) - b/(3*a);
    const x2 = 2 * Math.cbrt(r) * Math.cos((theta + 2*Math.PI)/3) - b/(3*a);
    const x3 = 2 * Math.cbrt(r) * Math.cos((theta + 4*Math.PI)/3) - b/(3*a);

    result = 'x₁ = ' + x1.toFixed(4) + ', x₂ = ' + x2.toFixed(4) + ', x₃ = ' + x3.toFixed(4);
  }

  document.getElementById('cubicSolution').textContent = result;
}

// تابع نمایش/مخفی‌سازی صفحه محاسبات
function showCalculationPage() {
  document.getElementById('calculationPage').classList.add('active');
}

function closeCalculationPage() {
  document.getElementById('calculationPage').classList.remove('active');
}

// اضافه کردن رویداد به دکمه‌های محاسبه در زمان بارگذاری صفحه
document.addEventListener('DOMContentLoaded', function() {
  // فعال‌سازی تب‌های محاسبات
  const calcTabBtns = document.querySelectorAll('.calc-tab-btn');
  calcTabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // حذف کلاس active از همه تب‌ها
      calcTabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.calc-tab-content').forEach(c => c.classList.remove('active'));

      // اضافه کردن کلاس active به تب انتخاب شده
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });

  // انتخاب شکل‌ها
  const shapeOptions = document.querySelectorAll('.shape-option');
  shapeOptions.forEach(option => {
    option.addEventListener('click', function() {
      // حذف کلاس active از همه گزینه‌ها
      shapeOptions.forEach(o => o.classList.remove('active'));
      document.querySelectorAll('.shape-form').forEach(f => f.classList.remove('active'));

      // اضافه کردن کلاس active به گزینه انتخاب شده
      this.classList.add('active');
      const shapeId = this.getAttribute('data-shape');
      document.getElementById(`${shapeId}-form`).classList.add('active');
    });
  });

  // انتخاب نوع معادله
  const equationTypeBtns = document.querySelectorAll('.equation-type-btn');
  equationTypeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // حذف کلاس active از همه دکمه‌ها
      equationTypeBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.equation-form').forEach(f => f.classList.remove('active'));

      // اضافه کردن کلاس active به دکمه انتخاب شده
      this.classList.add('active');
      const equationId = this.getAttribute('data-equation');
      document.getElementById(`${equationId}-form`).classList.add('active');
    });
  });

  // فعال‌سازی محاسبه اولیه برای هر بخش
  // این بخش را می‌توان در صورت نیاز فعال کرد
  try {
    calculateCircle();
    calculateRectangle();
    calculateTriangle();
    calculateEllipse();
    calculateTrapezoid();
    solveLinearEquation();
    solveQuadraticEquation();
    solveCubicEquation();
  } catch (error) {
    console.log('Some calculation elements might not be loaded yet');
  }

  // اضافه کردن رویداد به دکمه نمایش صفحه محاسبات
  const calculationButtons = document.querySelectorAll('[onclick="showCalculationPage()"]');
  calculationButtons.forEach(button => {
    button.addEventListener('click', function() {
      showCalculationPage();
    });
  });

  // اضافه کردن رویداد به دکمه بستن صفحه محاسبات
  const closeCalculationButtons = document.querySelectorAll('[onclick="closeCalculationPage()"]');
  closeCalculationButtons.forEach(button => {
    button.addEventListener('click', function() {
      closeCalculationPage();
    });
  });

  // تنظیم رویدادهای ورودی عددی
  setupNumericInputEvents();
});

// تنظیم رویدادهای ورودی عددی
function setupNumericInputEvents() {
  // اضافه کردن رویداد به ورودی‌های عددی برای جلوگیری از ورود مقادیر نامعتبر
  const numericInputs = document.querySelectorAll('input[type="number"]');
  numericInputs.forEach(input => {
    input.addEventListener('input', function() {
      // حذف کاراکترهای غیر عددی (به جز نقطه و منفی)
      this.value = this.value.replace(/[^\d.-]/g, '');

      // جلوگیری از ورود بیش از یک نقطه
      const pointCount = (this.value.match(/\./g) || []).length;
      if (pointCount > 1) {
        this.value = this.value.replace(/\.(?=.*\.)/g, '');
      }

      // جلوگیری از ورود بیش از یک منفی و قرار دادن آن فقط در ابتدا
      const minusCount = (this.value.match(/-/g) || []).length;
      if (minusCount > 1 || (minusCount === 1 && this.value.indexOf('-') !== 0)) {
        this.value = this.value.replace(/-/g, '');
        if (minusCount >= 1) {
          this.value = '-' + this.value;
        }
      }
    });
  });

  // اضافه کردن رویداد به دکمه‌های محاسبه در بخش‌های مختلف
  const calculateButtons = document.querySelectorAll('.calculate-btn');
  calculateButtons.forEach(button => {
    // بررسی نوع محاسبه بر اساس متن دکمه یا نزدیک‌ترین والد
    const parentContainer = button.closest('.shape-form, .equation-form');
    if (parentContainer) {
      button.addEventListener('click', function() {
        const containerId = parentContainer.id;

        // فراخوانی تابع مناسب بر اساس شناسه ظرف
        if (containerId === 'circle-form') {
          calculateCircle();
        } else if (containerId === 'rectangle-form') {
          calculateRectangle();
        } else if (containerId === 'triangle-form') {
          calculateTriangle();
        } else if (containerId === 'ellipse-form') {
          calculateEllipse();
        } else if (containerId === 'trapezoid-form') {
          calculateTrapezoid();
        } else if (containerId === 'linear-form') {
          solveLinearEquation();
        } else if (containerId === 'quadratic-form') {
          solveQuadraticEquation();
        } else if (containerId === 'cubic-form') {
          solveCubicEquation();
        }
      });
    }
  });
}

// تابع برای اجرای کد پس از بارگذاری کامل صفحه
function initCalculationPage() {
  // بررسی وجود المان‌های مورد نیاز
  const calculationPage = document.getElementById('calculationPage');
  if (!calculationPage) {
    console.error('Calculation page element not found!');
    return;
  }

  // بررسی وجود المان‌های اصلی ماشین حساب
  const calculatorDisplay = document.getElementById('calculatorDisplay');
  const calculatorHistory = document.getElementById('calculatorHistory');
  if (calculatorDisplay && calculatorHistory) {
    // تنظیم مقادیر اولیه
    currentInput = '0';
    calculationHistory = '';
    updateCalculatorDisplay();
  }

  // نمایش تب فعال به صورت پیش‌فرض
  const activeTab = document.querySelector('.calc-tab-btn.active');
  if (activeTab) {
    const tabId = activeTab.getAttribute('data-tab');
    const tabContent = document.getElementById(`${tabId}-tab`);
    if (tabContent) {
      tabContent.classList.add('active');
    }
  }

  // نمایش فرم شکل فعال به صورت پیش‌فرض
  const activeShape = document.querySelector('.shape-option.active');
  if (activeShape) {
    const shapeId = activeShape.getAttribute('data-shape');
    const shapeForm = document.getElementById(`${shapeId}-form`);
    if (shapeForm) {
      shapeForm.classList.add('active');
    }
  }

  // نمایش فرم معادله فعال به صورت پیش‌فرض
  const activeEquation = document.querySelector('.equation-type-btn.active');
  if (activeEquation) {
    const equationId = activeEquation.getAttribute('data-equation');
    const equationForm = document.getElementById(`${equationId}-form`);
    if (equationForm) {
      equationForm.classList.add('active');
    }
  }

  console.log('Calculation page initialized successfully');
}

// فراخوانی تابع مقداردهی اولیه پس از بارگذاری صفحه
window.addEventListener('load', initCalculationPage);

// تابع برای تغییر زبان المان‌های صفحه محاسبات
function updateCalculationLanguage() {
  const isEnglish = document.documentElement.lang === 'en';

  // به‌روزرسانی متن‌های دکمه‌ها و برچسب‌ها بر اساس زبان
  document.querySelectorAll('.fa-lang, .en-lang').forEach(element => {
    if (isEnglish) {
      element.style.display = element.classList.contains('en-lang') ? 'block' : 'none';
    } else {
      element.style.display = element.classList.contains('fa-lang') ? 'block' : 'none';
    }
  });

  // تغییر جهت صفحه بر اساس زبان
  if (isEnglish) {
    document.querySelector('.calculation-page').style.direction = 'ltr';
  } else {
    document.querySelector('.calculation-page').style.direction = 'rtl';
  }
}

// اضافه کردن رویداد تغییر زبان
document.addEventListener('languageChanged', updateCalculationLanguage);

// اضافه کردن این تابع به window برای دسترسی از خارج
window.updateCalculationLanguage = updateCalculationLanguage;

                                                      // بارگذاری نمونه کدها
// بارگذاری نمونه کدها
function loadCodeSamples() {
  // HTML code sample
  const htmlSample = [
    { number: 1, text: '<span class="tag">&lt;!DOCTYPE html&gt;</span>' },
    { number: 2, text: '<span class="tag">&lt;html</span> <span class="attribute">lang</span>=<span class="value">"fa"</span> <span class="attribute">dir</span>=<span class="value">"rtl"</span><span class="tag">&gt;</span>' },
    { number: 3, text: '<span class="tag">&lt;head&gt;</span>' },
    { number: 4, text: '  <span class="tag">&lt;meta</span> <span class="attribute">charset</span>=<span class="value">"UTF-8"</span><span class="tag">&gt;</span>' },
    { number: 5, text: '  <span class="tag">&lt;meta</span> <span class="attribute">name</span>=<span class="value">"viewport"</span> <span class="attribute">content</span>=<span class="value">"width=device-width, initial-scale=1.0"</span><span class="tag">&gt;</span>' },
    { number: 6, text: '  <span class="tag">&lt;title&gt;</span>هوش آرا | سایت آموزش ریاضی<span class="tag">&lt;/title&gt;</span>' },
    { number: 7, text: '  <span class="tag">&lt;link</span> <span class="attribute">rel</span>=<span class="value">"stylesheet"</span> <span class="attribute">href</span>=<span class="value">"styles.css"</span><span class="tag">&gt;</span>' },
    { number: 8, text: '<span class="tag">&lt;/head&gt;</span>' },
    { number: 9, text: '<span class="tag">&lt;body&gt;</span>' },
    { number: 10, text: '  <span class="tag">&lt;header</span> <span class="attribute">class</span>=<span class="value">"main-header"</span><span class="tag">&gt;</span>' },
    { number: 11, text: '    <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="value">"logo"</span><span class="tag">&gt;</span>' },
    { number: 12, text: '      <span class="tag">&lt;img</span> <span class="attribute">src</span>=<span class="value">"logo.svg"</span> <span class="attribute">alt</span>=<span class="value">"هوش آرا"</span><span class="tag">&gt;</span>' },
    { number: 13, text: '      <span class="tag">&lt;h1&gt;</span>هوش آرا<span class="tag">&lt;/h1&gt;</span>' },
    { number: 14, text: '    <span class="tag">&lt;/div&gt;</span>' },
    { number: 15, text: '  <span class="tag">&lt;/header&gt;</span>' },
    { number: 16, text: '  <span class="comment">&lt;!-- محتوای اصلی --&gt;</span>' },
    { number: 17, text: '<span class="tag">&lt;/body&gt;</span>' },
    { number: 18, text: '<span class="tag">&lt;/html&gt;</span>' }
  ];

  // CSS code sample
  const cssSample = [
    { number: 1, text: '<span class="comment">/* استایل‌های پایه */</span>' },
    { number: 2, text: '<span class="selector">*</span> {' },
    { number: 3, text: '  <span class="property">margin</span>: <span class="value">0</span>;' },
    { number: 4, text: '  <span class="property">padding</span>: <span class="value">0</span>;' },
    { number: 5, text: '  <span class="property">box-sizing</span>: <span class="value">border-box</span>;' },
    { number: 6, text: '}' },
    { number: 7, text: '' },
    { number: 8, text: '<span class="selector">:root</span> {' },
    { number: 9, text: '  <span class="property">--primary-color</span>: <span class="value">#0066cc</span>;' },
    { number: 10, text: '  <span class="property">--hover-color</span>: <span class="value">#0055b3</span>;' },
    { number: 11, text: '  <span class="property">--bg-color</span>: <span class="value">#f9f3e6</span>;' },
    { number: 12, text: '  <span class="property">--text-color</span>: <span class="value">#333</span>;' },
    { number: 13, text: '}' },
    { number: 14, text: '' },
    { number: 15, text: '<span class="selector">body</span> {' },
    { number: 16, text: '  <span class="property">font-family</span>: <span class="value">\'Vazir\', \'Tahoma\', Arial, sans-serif</span>;' },
    { number: 17, text: '  <span class="property">background-color</span>: <span class="value">var(--bg-color)</span>;' },
    { number: 18, text: '  <span class="property">color</span>: <span class="value">var(--text-color)</span>;' },
    { number: 19, text: '  <span class="property">direction</span>: <span class="value">rtl</span>;' },
    { number: 20, text: '}' },
    { number: 21, text: '' },
    { number: 22, text: '<span class="selector">.main-header</span> {' },
    { number: 23, text: '  <span class="property">display</span>: <span class="value">flex</span>;' },
    { number: 24, text: '  <span class="property">justify-content</span>: <span class="value">space-between</span>;' },
    { number: 25, text: '  <span class="property">align-items</span>: <span class="value">center</span>;' },
    { number: 26, text: '  <span class="property">padding</span>: <span class="value">20px</span>;' },
    { number: 27, text: '  <span class="property">background-color</span>: <span class="value">white</span>;' },
    { number: 28, text: '  <span class="property">box-shadow</span>: <span class="value">0 2px 10px rgba(0, 0, 0, 0.1)</span>;' },
    { number: 29, text: '}' }
  ];

  // JavaScript code sample
  const jsSample = [
    { number: 1, text: '<span class="comment">// انیمیشن منوی آچاری</span>' },
    { number: 2, text: '<span class="keyword">function</span> <span class="function">toggleSettingsMenu</span>() {' },
    { number: 3, text: '  <span class="keyword">const</span> <span class="variable">menu</span> = <span class="variable">document</span>.<span class="function">getElementById</span>(<span class="string">\'settingsMenu\'</span>);' },
    { number: 4, text: '  <span class="keyword">const</span> <span class="variable">icon</span> = <span class="variable">document</span>.<span class="function">getElementById</span>(<span class="string">\'settingsIcon\'</span>);' },
    { number: 5, text: '' },
    { number: 6, text: '  <span class="variable">menu</span>.<span class="property">classList</span>.<span class="function">toggle</span>(<span class="string">\'active\'</span>);' },
    { number: 7, text: '  <span class="variable">icon</span>.<span class="property">classList</span>.<span class="function">toggle</span>(<span class="string">\'active\'</span>);' },
    { number: 8, text: '' },
    { number: 9, text: '  <span class="comment">// اگر منو فعال شد، آیکون را بچرخان</span>' },
    { number: 10, text: '  <span class="keyword">if</span> (<span class="variable">menu</span>.<span class="property">classList</span>.<span class="function">contains</span>(<span class="string">\'active\'</span>)) {' },
    { number: 11, text: '    <span class="variable">icon</span>.<span class="function">querySelector</span>(<span class="string">\'svg\'</span>).<span class="property">style</span>.<span class="property">transform</span> = <span class="string">\'rotate(180deg)\'</span>;' },
    { number: 12, text: '  } <span class="keyword">else</span> {' },
    { number: 13, text: '    <span class="variable">icon</span>.<span class="function">querySelector</span>(<span class="string">\'svg\'</span>).<span class="property">style</span>.<span class="property">transform</span> = <span class="string">\'rotate(0)\'</span>;' },
    { number: 14, text: '  }' },
    { number: 15, text: '}' },
    { number: 16, text: '' },
    { number: 17, text: '<span class="comment">// تغییر تم روشن/تاریک</span>' },
    { number: 18, text: '<span class="keyword">function</span> <span class="function">toggleTheme</span>() {' },
    { number: 19, text: '  <span class="keyword">const</span> <span class="variable">body</span> = <span class="variable">document</span>.<span class="property">body</span>;' },
    { number: 20, text: '  <span class="variable">body</span>.<span class="property">classList</span>.<span class="function">toggle</span>(<span class="string">\'dark-theme\'</span>);' },
    { number: 21, text: '}' },
    { number: 22, text: '' },
    { number: 23, text: '<span class="comment">// محاسبه عبارت ریاضی</span>' },
    { number: 24, text: '<span class="keyword">function</span> <span class="function">calculate</span>() {' },
    { number: 25, text: '  <span class="keyword">const</span> <span class="variable">expression</span> = <span class="variable">document</span>.<span class="function">getElementById</span>(<span class="string">\'expression\'</span>).<span class="property">value</span>;' },
    { number: 26, text: '  <span class="keyword">try</span> {' },
    { number: 27, text: '    <span class="keyword">const</span> <span class="variable">result</span> = <span class="function">eval</span>(<span class="variable">expression</span>);' },
    { number: 28, text: '    <span class="variable">document</span>.<span class="function">getElementById</span>(<span class="string">\'resultValue\'</span>).<span class="property">textContent</span> = <span class="variable">result</span>;' },
    { number: 29, text: '    <span class="variable">document</span>.<span class="function">getElementById</span>(<span class="string">\'resultContainer\'</span>).<span class="property">classList</span>.<span class="function">add</span>(<span class="string">\'active\'</span>);' },
    { number: 30, text: '  } <span class="keyword">catch</span> (<span class="variable">error</span>) {' },
    { number: 31, text: '    <span class="variable">document</span>.<span class="function">getElementById</span>(<span class="string">\'resultValue\'</span>).<span class="property">textContent</span> = <span class="string">\'خطا در محاسبه\'</span>;' },
    { number: 32, text: '    <span class="variable">document</span>.<span class="function">getElementById</span>(<span class="string">\'resultContainer\'</span>).<span class="property">classList</span>.<span class="function">add</span>(<span class="string">\'active\'</span>);' },
    { number: 33, text: '  }' },
    { number: 34, text: '}' }
  ];

  // React code sample
  const reactSample = [
    { number: 1, text: '<span class="keyword">import</span> React, { useState, useEffect } <span class="keyword">from</span> <span class="string">\'react\'</span>;' },
    { number: 2, text: '' },
    { number: 3, text: '<span class="keyword">const</span> <span class="function">MathCalculator</span> = () => {' },
    { number: 4, text: '  <span class="keyword">const</span> [<span class="variable">expression</span>, <span class="variable">setExpression</span>] = <span class="function">useState</span>(<span class="string">\'\'</span>);' },
    { number: 5, text: '  <span class="keyword">const</span> [<span class="variable">result</span>, <span class="variable">setResult</span>] = <span class="function">useState</span>(<span class="string">\'\'</span>);' },
    { number: 6, text: '  <span class="keyword">const</span> [<span class="variable">error</span>, <span class="variable">setError</span>] = <span class="function">useState</span>(<span class="string">\'\'</span>);' },
    { number: 7, text: '' },
    { number: 8, text: '  <span class="keyword">const</span> <span class="function">calculateResult</span> = () => {' },
    { number: 9, text: '    <span class="keyword">try</span> {' },
    { number: 10, text: '      <span class="keyword">const</span> <span class="variable">calculatedResult</span> = <span class="function">eval</span>(<span class="variable">expression</span>);' },
    { number: 11, text: '      <span class="variable">setResult</span>(<span class="variable">calculatedResult</span>);' },
    { number: 12, text: '      <span class="variable">setError</span>(<span class="string">\'\'</span>);' },
    { number: 13, text: '    } <span class="keyword">catch</span> (<span class="variable">err</span>) {' },
    { number: 14, text: '      <span class="variable">setError</span>(<span class="string">\'خطا در محاسبه\'</span>);' },
    { number: 15, text: '      <span class="variable">setResult</span>(<span class="string">\'\'</span>);' },
    { number: 16, text: '    }' },
    { number: 17, text: '  };' },
    { number: 18, text: '' },
    { number: 19, text: '  <span class="keyword">return</span> (' },
    { number: 20, text: '    <span class="tag">&lt;div</span> <span class="attribute">className</span>=<span class="string">"calculator"</span><span class="tag">&gt;</span>' },
    { number: 21, text: '      <span class="tag">&lt;input</span>' },
    { number: 22, text: '        <span class="attribute">type</span>=<span class="string">"text"</span>' },
    { number: 23, text: '        <span class="attribute">value</span>={<span class="variable">expression</span>}' },
    { number: 24, text: '        <span class="attribute">onChange</span>={(<span class="variable">e</span>) => <span class="variable">setExpression</span>(<span class="variable">e</span>.<span class="property">target</span>.<span class="property">value</span>)}' },
    { number: 25, text: '        <span class="attribute">placeholder</span>=<span class="string">"عبارت ریاضی را وارد کنید"</span>' },
    { number: 26, text: '      <span class="tag">/&gt;</span>' },
    { number: 27, text: '      <span class="tag">&lt;button</span> <span class="attribute">onClick</span>={<span class="variable">calculateResult</span>}<span class="tag">&gt;</span>محاسبه<span class="tag">&lt;/button&gt;</span>' },
    { number: 28, text: '      {<span class="variable">result</span> && <span class="tag">&lt;div</span> <span class="attribute">className</span>=<span class="string">"result"</span><span class="tag">&gt;</span>{<span class="variable">result</span>}<span class="tag">&lt;/div&gt;</span>}' },
    { number: 29, text: '      {<span class="variable">error</span> && <span class="tag">&lt;div</span> <span class="attribute">className</span>=<span class="string">"error"</span><span class="tag">&gt;</span>{<span class="variable">error</span>}<span class="tag">&lt;/div&gt;</span>}' },
    { number: 30, text: '    <span class="tag">&lt;/div&gt;</span>' },
    { number: 31, text: '  );' },
    { number: 32, text: '};' },
    { number: 33, text: '' },
    { number: 34, text: '<span class="keyword">export default</span> MathCalculator;' }
  ];

  // Vue.js code sample
  const vueSample = [
    { number: 1, text: '<span class="tag">&lt;template&gt;</span>' },
    { number: 2, text: '  <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"calculator"</span><span class="tag">&gt;</span>' },
    { number: 3, text: '    <span class="tag">&lt;input</span>' },
    { number: 4, text: '      <span class="attribute">type</span>=<span class="string">"text"</span>' },
    { number: 5, text: '      <span class="attribute">v-model</span>=<span class="string">"expression"</span>' },
    { number: 6, text: '      <span class="attribute">placeholder</span>=<span class="string">"عبارت ریاضی را وارد کنید"</span>' },
    { number: 7, text: '    <span class="tag">/&gt;</span>' },
    { number: 8, text: '    <span class="tag">&lt;button</span> <span class="attribute">@click</span>=<span class="string">"calculateResult"</span><span class="tag">&gt;</span>محاسبه<span class="tag">&lt;/button&gt;</span>' },
    { number: 9, text: '    <span class="tag">&lt;div</span> <span class="attribute">v-if</span>=<span class="string">"result"</span> <span class="attribute">class</span>=<span class="string">"result"</span><span class="tag">&gt;</span>{{ result }}<span class="tag">&lt;/div&gt;</span>' },
    { number: 10, text: '    <span class="tag">&lt;div</span> <span class="attribute">v-if</span>=<span class="string">"error"</span> <span class="attribute">class</span>=<span class="string">"error"</span><span class="tag">&gt;</span>{{ error }}<span class="tag">&lt;/div&gt;</span>' },
    { number: 11, text: '  <span class="tag">&lt;/div&gt;</span>' },
    { number: 12, text: '<span class="tag">&lt;/template&gt;</span>' },
    { number: 13, text: '' },
    { number: 14, text: '<span class="tag">&lt;script&gt;</span>' },
    { number: 15, text: '<span class="keyword">export default</span> {' },
    { number: 16, text: '  <span class="property">name</span>: <span class="string">\'MathCalculator\'</span>,' },
    { number: 17, text: '  <span class="property">data</span>() {' },
    { number: 18, text: '    <span class="keyword">return</span> {' },
    { number: 19, text: '      <span class="property">expression</span>: <span class="string">\'\'</span>,' },
    { number: 20, text: '      <span class="property">result</span>: <span class="string">\'\'</span>,' },
    { number: 21, text: '      <span class="property">error</span>: <span class="string">\'\'</span>' },
    { number: 22, text: '    };' },
    { number: 23, text: '  },' },
    { number: 24, text: '  <span class="property">methods</span>: {' },
    { number: 25, text: '    <span class="function">calculateResult</span>() {' },
    { number: 26, text: '      <span class="keyword">try</span> {' },
    { number: 27, text: '        <span class="keyword">this</span>.<span class="property">result</span> = <span class="function">eval</span>(<span class="keyword">this</span>.<span class="property">expression</span>);' },
    { number: 28, text: '        <span class="keyword">this</span>.<span class="property">error</span> = <span class="string">\'\'</span>;' },
    { number: 29, text: '      } <span class="keyword">catch</span> (<span class="variable">err</span>) {' },
    { number: 30, text: '        <span class="keyword">this</span>.<span class="property">error</span> = <span class="string">\'خطا در محاسبه\'</span>;' },
    { number: 31, text: '        <span class="keyword">this</span>.<span class="property">result</span> = <span class="string">\'\'</span>;' },
    { number: 32, text: '      }' },
    { number: 33, text: '    }' },
    { number: 34, text: '  }' },
    { number: 35, text: '};' },
    { number: 36, text: '<span class="tag">&lt;/script&gt;</span>' }
  ];

  // بارگذاری نمونه کدها در المنت‌های مربوطه
  loadCodeToElement('htmlCode', htmlSample);
  loadCodeToElement('cssCode', cssSample);
  loadCodeToElement('jsCode', jsSample);
  loadCodeToElement('reactCode', reactSample);
  loadCodeToElement('vueCode', vueSample);
}

// نمایش کد در المنت
function loadCodeToElement(elementId, codeSample) {
  const codeElement = document.getElementById(elementId);
  codeElement.innerHTML = '';

  codeSample.forEach((line, index) => {
    const codeLine = document.createElement('div');
    codeLine.className = 'code-line';
    codeLine.style.animationDelay = `${index * 0.05}s`;

    const lineNumber = document.createElement('div');
    lineNumber.className = 'line-number';
    lineNumber.textContent = line.number;

    const codeText = document.createElement('div');
    codeText.className = 'code-text';
    codeText.innerHTML = line.text;

    codeLine.appendChild(lineNumber);
    codeLine.appendChild(codeText);
    codeElement.appendChild(codeLine);

    // اضافه کردن مکان‌نما به آخرین خط
    if (index === codeSample.length - 1) {
      const cursor = document.createElement('span');
      cursor.className = 'typing-cursor';
      codeText.appendChild(cursor);
    }
  });
}

// تنظیمات اولیه صفحه
document.addEventListener('DOMContentLoaded', function() {
  // بارگذاری نمونه کدها
  loadCodeSamples();

  // نمایش نمودارهای پیشرفت - کد جدید برای ترکیب کدهای سایت
  setTimeout(() => {
    document.getElementById('htmlProgress').style.width = '42%';
    document.getElementById('cssProgress').style.width = '35%';
    document.getElementById('jsProgress').style.width = '20%';
    document.getElementById('svgProgress').style.width = '8%';
  }, 500);

  // تنظیم تب‌های زبان‌های برنامه‌نویسی
  const languageTabs = document.querySelectorAll('.language-tab');
  languageTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // حذف کلاس active از همه تب‌ها
      languageTabs.forEach(t => t.classList.remove('active'));
      // اضافه کردن کلاس active به تب کلیک شده
      tab.classList.add('active');

      // نمایش محتوای مربوط به تب
      const tabId = tab.getAttribute('data-tab');
      document.querySelectorAll('.code-content').forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(`${tabId}Code`).classList.add('active');
    });
  });
});

// تعریف یک شیء برای نگهداری متغیرهای صفحه رسم نمودار
window.graphApp = {
    canvas: null,
    ctx: null,
    functions: [],
    isDragging: false,
    lastX: 0,
    lastY: 0,
    scale: 1,
    offsetX: 0,
    offsetY: 0,
    xMin: -10,
    xMax: 10,
    yMin: -10,
    yMax: 10,
    showGrid: true,
    showAxes: true,
    showLabels: true,
    lineWidth: 2,
    currentTab: 'standard',
    activeToolButton: 'pan-btn',
    renderQuality: 'medium',
    initialized: false
};

// نمایش صفحه رسم نمودار
function showGraphPage() {
    document.getElementById('graphPage').classList.add('active');

    // بررسی وجود کتابخانه math.js
    if (typeof math === 'undefined') {
        // بارگذاری کتابخانه math.js
        const script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.8.0/math.min.js";
        script.onload = function() {
            console.log('Math.js loaded successfully');
            initializeGraph();
        };
        document.head.appendChild(script);
    } else {
        initializeGraph();
    }

    // بررسی وجود کتابخانه Font Awesome
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(link);
    }
}

// بستن صفحه رسم نمودار
function closeGraphPage() {
    document.getElementById('graphPage').classList.remove('active');
}

// مقداردهی اولیه گراف
function initializeGraph() {
    const app = window.graphApp;

    // اگر قبلاً مقداردهی شده، فقط رسم مجدد انجام شود
    if (app.initialized) {
        drawGraph();
        return;
    }

    // تنظیم کانواس
    app.canvas = document.getElementById('graph-canvas');
    if (!app.canvas) {
        console.error('Canvas element not found');
        return;
    }

    app.ctx = app.canvas.getContext('2d');
    resizeCanvas();

    // افزودن رویدادهای مربوط به کانواس
    setupCanvasEvents();

    // افزودن رویدادهای مربوط به دکمه‌ها
    setupButtonEvents();

    // افزودن رویدادهای مربوط به تب‌ها
    setupTabEvents();

    // افزودن رویدادهای مربوط به تنظیمات
    setupSettingsEvents();

    // رسم نمودار اولیه
    drawGraph();

    // نمایش اعلان خوش‌آمدگویی
    const welcomeMessage = document.documentElement.lang === 'fa' ?
        'به رسم نمودار پیشرفته خوش آمدید!' :
        'Welcome to Advanced Graph Drawing!';
    showToast('اطلاعات', welcomeMessage, 'info');

    // رسم تابع اولیه (سینوس)
    drawFunction();

    // علامت‌گذاری به عنوان مقداردهی شده
    app.initialized = true;
}

// تنظیم اندازه کانواس
function resizeCanvas() {
    const app = window.graphApp;
    const container = app.canvas.parentElement;
    app.canvas.width = container.offsetWidth;
    app.canvas.height = container.offsetHeight;
    // رسم مجدد نمودار پس از تغییر اندازه
    drawGraph();
}

// افزودن رویدادهای مربوط به کانواس
function setupCanvasEvents() {
    const app = window.graphApp;

    // رویداد تغییر اندازه پنجره
    window.addEventListener('resize', resizeCanvas);

    // رویدادهای مربوط به درگ کردن
    app.canvas.addEventListener('mousedown', function(e) {
        if (app.activeToolButton === 'pan-btn') {
            app.isDragging = true;
            app.lastX = e.clientX;
            app.lastY = e.clientY;
            app.canvas.style.cursor = 'grabbing';
        }
    });

    app.canvas.addEventListener('mousemove', function(e) {
        // نمایش مختصات
        updateCoordinates(e);

        if (app.isDragging && app.activeToolButton === 'pan-btn') {
            const deltaX = e.clientX - app.lastX;
            const deltaY = e.clientY - app.lastY;

            // تغییر جابجایی براساس مقیاس
            app.offsetX += deltaX / app.scale;
            app.offsetY -= deltaY / app.scale;

            app.lastX = e.clientX;
            app.lastY = e.clientY;

            // رسم مجدد نمودار
            drawGraph();
        }
    });

    app.canvas.addEventListener('mouseup', function() {
        app.isDragging = false;
        app.canvas.style.cursor = 'grab';
    });

    app.canvas.addEventListener('mouseleave', function() {
        app.isDragging = false;
        app.canvas.style.cursor = 'grab';
    });

    // رویداد اسکرول برای زوم
    app.canvas.addEventListener('wheel', function(e) {
        e.preventDefault();

        // تعیین مرکز زوم (موقعیت موس)
        const rect = app.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // تبدیل موقعیت موس به مختصات ریاضی
        const mathX = ((mouseX - app.canvas.width / 2) / app.scale) - app.offsetX;
        const mathY = -((mouseY - app.canvas.height / 2) / app.scale) - app.offsetY;

        // تغییر مقیاس
        const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
        app.scale *= zoomFactor;

        // تنظیم جابجایی برای حفظ موقعیت موس
        app.offsetX = -(mathX * app.scale - mouseX + app.canvas.width / 2) / app.scale;
        app.offsetY = -(mathY * app.scale + mouseY - app.canvas.height / 2) / app.scale;

        // به‌روزرسانی اطلاعات مقیاس
        updateScaleInfo();

        // رسم مجدد نمودار
        drawGraph();
    });
}

// به‌روزرسانی نمایش مختصات
function updateCoordinates(e) {
    const app = window.graphApp;
    const rect = app.canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // تبدیل موقعیت موس به مختصات ریاضی
    const mathX = ((mouseX - app.canvas.width / 2) / app.scale) - app.offsetX;
    const mathY = -((mouseY - app.canvas.height / 2) / app.scale) - app.offsetY;

    // نمایش مختصات با دو رقم اعشار
    const coordElem = document.getElementById('coordinates');
    if (coordElem) {
        coordElem.textContent = `x: ${mathX.toFixed(2)}, y: ${mathY.toFixed(2)}`;
    }
}

// به‌روزرسانی اطلاعات مقیاس
function updateScaleInfo() {
    const app = window.graphApp;
    const scaleInfoElem = document.getElementById('scale-info');
    if (scaleInfoElem) {
        if (document.documentElement.lang === 'fa') {
            scaleInfoElem.innerHTML = `<span class="fa-lang">مقیاس: ${app.scale.toFixed(2)}:1</span>`;
        } else {
            scaleInfoElem.innerHTML = `<span class="en-lang">Scale: ${app.scale.toFixed(2)}:1</span>`;
        }
    }
}

// افزودن رویدادهای مربوط به دکمه‌ها
function setupButtonEvents() {
    const app = window.graphApp;

    // دکمه رسم تابع
    const drawBtn = document.getElementById('draw-btn');
    if (drawBtn) {
        drawBtn.addEventListener('click', function() {
            drawFunction();
        });
    }

    // دکمه رسم تابع پارامتری
    const drawParametricBtn = document.getElementById('draw-parametric-btn');
    if (drawParametricBtn) {
        drawParametricBtn.addEventListener('click', function() {
            drawParametricFunction();
        });
    }

    // دکمه رسم تابع قطبی
    const drawPolarBtn = document.getElementById('draw-polar-btn');
    if (drawPolarBtn) {
        drawPolarBtn.addEventListener('click', function() {
            drawPolarFunction();
        });
    }

    // دکمه اضافه کردن تابع جدید
    const addFunctionBtn = document.getElementById('add-function-btn');
    if (addFunctionBtn) {
        addFunctionBtn.addEventListener('click', function() {
            addNewFunctionInput();
        });
    }

    // دکمه حذف همه توابع
    const clearAllBtn = document.getElementById('clear-all-btn');
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', function() {
            clearAllFunctions();
        });
    }

    // دکمه‌های ابزار
    document.querySelectorAll('.tool-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // حذف کلاس active از همه دکمه‌های ابزار
            document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));

            // اضافه کردن کلاس active به دکمه کلیک شده
            this.classList.add('active');

            // ذخیره ابزار فعال
            app.activeToolButton = this.id;

            // تغییر حالت نشانگر موس
            if (app.activeToolButton === 'pan-btn') {
                app.canvas.style.cursor = 'grab';
            } else if (app.activeToolButton === 'zoom-in-btn') {
                app.canvas.style.cursor = 'zoom-in';
                // اعمال زوم
                app.scale *= 1.2;
                updateScaleInfo();
                drawGraph();
            } else if (app.activeToolButton === 'zoom-out-btn') {
                app.canvas.style.cursor = 'zoom-out';
                // اعمال زوم
                app.scale *= 0.8;
                updateScaleInfo();
                drawGraph();
            } else if (app.activeToolButton === 'reset-btn') {
                resetView();
            } else if (app.activeToolButton === 'grid-btn') {
                toggleGrid();
            } else if (app.activeToolButton === 'axes-btn') {
                toggleAxes();
            } else if (app.activeToolButton === 'labels-btn') {
                toggleLabels();
            } else if (app.activeToolButton === 'save-btn') {
                saveImage();
            } else {
                app.canvas.style.cursor = 'default';
            }
        });
    });

    // دکمه‌های پیش‌نمایش
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const preset = this.getAttribute('data-preset');
            loadPreset(preset);
        });
    });

    // دکمه باز/بسته کردن تنظیمات
    const settingsCollapseBtn = document.getElementById('settings-collapse-btn');
    if (settingsCollapseBtn) {
        settingsCollapseBtn.addEventListener('click', function() {
            const settingsBody = document.querySelector('.settings-body');
            settingsBody.classList.toggle('collapsed');
            this.classList.toggle('collapsed');

            // تغییر آیکون
            const icon = this.querySelector('i');
            if (settingsBody.classList.contains('collapsed')) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    }

    // دکمه اعمال محدوده
    const applyRangeBtn = document.getElementById('apply-range-btn');
    if (applyRangeBtn) {
        applyRangeBtn.addEventListener('click', function() {
            applyAxisRange();
        });
    }
}

// افزودن رویدادهای مربوط به تب‌ها
function setupTabEvents() {
    const app = window.graphApp;

    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // حذف کلاس active از همه تب‌ها
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            // اضافه کردن کلاس active به تب انتخاب شده
            this.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');

            // ذخیره تب فعال
            app.currentTab = tabId;
        });
    });
}

// افزودن رویدادهای مربوط به تنظیمات
function setupSettingsEvents() {
    const app = window.graphApp;

    // تغییر ضخامت خط
    const lineWidthSlider = document.getElementById('line-width');
    const lineWidthValue = document.getElementById('line-width-value');

    if (lineWidthSlider && lineWidthValue) {
        lineWidthSlider.addEventListener('input', function() {
            app.lineWidth = parseInt(this.value);
            lineWidthValue.textContent = app.lineWidth;
            drawGraph();
        });
    }

    // تغییر کیفیت رسم
    const qualitySelect = document.getElementById('quality-select');
    if (qualitySelect) {
        qualitySelect.addEventListener('change', function() {
            app.renderQuality = this.value;
            drawGraph();
        });
    }
}

// تعیین تعداد نقاط براساس کیفیت رسم و نوع تابع
function getPointCount(funcType) {
    const app = window.graphApp;
    let baseCount;

    switch (app.renderQuality) {
        case 'low':
            baseCount = app.canvas.width / 8; // خیلی کمتر از قبل
            break;
        case 'medium':
            baseCount = app.canvas.width / 4;
            break;
        case 'high':
            baseCount = app.canvas.width / 2;
            break;
        default:
            baseCount = app.canvas.width / 4;
    }

    // برای توابع پارامتری و قطبی، تعداد نقاط کمتری استفاده کن
    if (funcType === 'parametric' || funcType === 'polar') {
        return Math.min(500, baseCount); // حداکثر 500 نقطه
    }

    return baseCount;
}

// رسم نمودار
function drawGraph() {
    const app = window.graphApp;
    if (!app.ctx || !app.canvas) return;

    // پاک کردن کانواس
    app.ctx.fillStyle = '#ffffff'; // همیشه پس‌زمینه سفید
    app.ctx.fillRect(0, 0, app.canvas.width, app.canvas.height);

    // رسم شبکه
    if (app.showGrid) {
        drawGrid();
    }

    // رسم محورها
    if (app.showAxes) {
        drawAxes();
    }

    // رسم توابع
    drawFunctions();
}

// رسم شبکه
function drawGrid() {
    const app = window.graphApp;
    app.ctx.strokeStyle = '#dddddd'; // همیشه شبکه خاکستری روشن
    app.ctx.lineWidth = 0.5;

    // فاصله بین خطوط شبکه براساس مقیاس
    let gridStep = 1;

    // تنظیم فاصله خطوط شبکه براساس مقیاس
    if (app.scale < 0.1) gridStep = 10;
    else if (app.scale < 0.5) gridStep = 5;
    else if (app.scale < 1) gridStep = 2;

    // محدود کردن تعداد خطوط شبکه به حداکثر 100 تا در هر جهت
    const maxLines = 100;
    const viewWidth = app.canvas.width / app.scale;
    const viewHeight = app.canvas.height / app.scale;

    if (viewWidth / gridStep > maxLines) {
        gridStep = Math.ceil(viewWidth / maxLines);
    }

    // تبدیل مختصات ریاضی به مختصات کانواس
    function toScreenX(x) {
        return (x + app.offsetX) * app.scale + app.canvas.width / 2;
    }

    function toScreenY(y) {
        return app.canvas.height - ((y + app.offsetY) * app.scale + app.canvas.height / 2);
    }

    // محاسبه محدوده قابل مشاهده
    const visibleXMin = -app.offsetX - app.canvas.width / (2 * app.scale);
    const visibleXMax = -app.offsetX + app.canvas.width / (2 * app.scale);
    const visibleYMin = -app.offsetY - app.canvas.height / (2 * app.scale);
    const visibleYMax = -app.offsetY + app.canvas.height / (2 * app.scale);

    // رسم خطوط عمودی
    for (let x = Math.floor(visibleXMin / gridStep) * gridStep; x <= Math.ceil(visibleXMax / gridStep) * gridStep; x += gridStep) {
        if (x === 0) continue; // محور y را جداگانه رسم می‌کنیم

        const screenX = toScreenX(x);
        app.ctx.beginPath();
        app.ctx.moveTo(screenX, 0);
        app.ctx.lineTo(screenX, app.canvas.height);
        app.ctx.stroke();
    }

    // رسم خطوط افقی
    for (let y = Math.floor(visibleYMin / gridStep) * gridStep; y <= Math.ceil(visibleYMax / gridStep) * gridStep; y += gridStep) {
        if (y === 0) continue; // محور x را جداگانه رسم می‌کنیم

        const screenY = toScreenY(y);
        app.ctx.beginPath();
        app.ctx.moveTo(0, screenY);
        app.ctx.lineTo(app.canvas.width, screenY);
        app.ctx.stroke();
    }
}

// رسم محورها
function drawAxes() {
    const app = window.graphApp;

    // تبدیل مختصات ریاضی به مختصات کانواس
    function toScreenX(x) {
        return (x + app.offsetX) * app.scale + app.canvas.width / 2;
    }

    function toScreenY(y) {
        return app.canvas.height - ((y + app.offsetY) * app.scale + app.canvas.height / 2);
    }

    app.ctx.strokeStyle = '#666666'; // همیشه محورها خاکستری تیره
    app.ctx.lineWidth = 2;

    // محور y
    const yAxisX = toScreenX(0);
    app.ctx.beginPath();
    app.ctx.moveTo(yAxisX, 0);
    app.ctx.lineTo(yAxisX, app.canvas.height);
    app.ctx.stroke();

    // محور x
    const xAxisY = toScreenY(0);
    app.ctx.beginPath();
    app.ctx.moveTo(0, xAxisY);
    app.ctx.lineTo(app.canvas.width, xAxisY);
    app.ctx.stroke();

    // رسم برچسب‌ها
    if (app.showLabels) {
        drawAxisLabels();
    }
}

// رسم برچسب‌های محورها
function drawAxisLabels() {
    const app = window.graphApp;

    // تبدیل مختصات ریاضی به مختصات کانواس
    function toScreenX(x) {
        return (x + app.offsetX) * app.scale + app.canvas.width / 2;
    }

    function toScreenY(y) {
        return app.canvas.height - ((y + app.offsetY) * app.scale + app.canvas.height / 2);
    }

    app.ctx.font = '12px Vazirmatn';
    app.ctx.fillStyle = '#666666'; // همیشه برچسب‌ها خاکستری تیره
    app.ctx.textAlign = 'center';
    app.ctx.textBaseline = 'middle';

    // محاسبه محدوده قابل مشاهده
    const visibleXMin = -app.offsetX - app.canvas.width / (2 * app.scale);
    const visibleXMax = -app.offsetX + app.canvas.width / (2 * app.scale);
    const visibleYMin = -app.offsetY - app.canvas.height / (2 * app.scale);
    const visibleYMax = -app.offsetY + app.canvas.height / (2 * app.scale);

    // تعیین فاصله بین برچسب‌ها براساس مقیاس
    let step = 1;
    if (app.scale < 0.1) step = 10;
    else if (app.scale < 0.5) step = 5;
    else if (app.scale < 1) step = 2;

    // محدود کردن تعداد برچسب‌ها به حداکثر 20 تا در هر محور
    const maxLabels = 20;
    const xRange = visibleXMax - visibleXMin;
    const yRange = visibleYMax - visibleYMin;

    if (xRange / step > maxLabels) {
        step = Math.ceil(xRange / maxLabels);
    }

    // برچسب‌های محور x
    for (let x = Math.floor(visibleXMin / step) * step; x <= Math.ceil(visibleXMax / step) * step; x += step) {
        if (x === 0) continue; // مبدأ را جداگانه رسم می‌کنیم

        const screenX = toScreenX(x);
        const screenY = toScreenY(0) + 20;

        // رسم خط کوچک
        app.ctx.beginPath();
        app.ctx.moveTo(screenX, toScreenY(0) - 5);
        app.ctx.lineTo(screenX, toScreenY(0) + 5);
        app.ctx.stroke();

        // رسم برچسب
        app.ctx.fillText(x, screenX, screenY);
    }

    // برچسب‌های محور y
    for (let y = Math.floor(visibleYMin / step) * step; y <= Math.ceil(visibleYMax / step) * step; y += step) {
        if (y === 0) continue; // مبدأ را جداگانه رسم می‌کنیم

        const screenX = toScreenX(0) - 20;
        const screenY = toScreenY(y);

        // رسم خط کوچک
        app.ctx.beginPath();
        app.ctx.moveTo(toScreenX(0) - 5, screenY);
        app.ctx.lineTo(toScreenX(0) + 5, screenY);
        app.ctx.stroke();

        // رسم برچسب
        app.ctx.fillText(y, screenX, screenY);
    }

    // رسم مبدأ مختصات
    app.ctx.fillText('0', toScreenX(0) - 15, toScreenY(0) + 15);
}

// رسم توابع
function drawFunctions() {
    const app = window.graphApp;

    // رسم هر تابع در آرایه توابع
    app.functions.forEach(function(func) {
        if (func.visible) {
            if (func.type === 'standard') {
                drawStandardFunction(func);
            } else if (func.type === 'parametric') {
                drawParametricFunction(func);
            } else if (func.type === 'polar') {
                drawPolarFunction(func);
            }
        }
    });
}

// رسم تابع استاندارد
function drawStandardFunction(func) {
    const app = window.graphApp;

    // تبدیل مختصات ریاضی به مختصات کانواس
    function toScreenX(x) {
        return (x + app.offsetX) * app.scale + app.canvas.width / 2;
    }

    function toScreenY(y) {
        return app.canvas.height - ((y + app.offsetY) * app.scale + app.canvas.height / 2);
    }

    app.ctx.strokeStyle = func.color;
    app.ctx.lineWidth = app.lineWidth;
    app.ctx.beginPath();

    // تعداد نقاط براساس کیفیت رسم
    const numPoints = getPointCount('standard');

    // محاسبه محدوده قابل مشاهده
    const visibleXMin = -app.offsetX - app.canvas.width / (2 * app.scale);
    const visibleXMax = -app.offsetX + app.canvas.width / (2 * app.scale);

    let isFirstPoint = true;
    let lastY = null;

    // رسم تابع
    for (let i = 0; i <= numPoints; i++) {
        const t = i / numPoints;
        const x = visibleXMin + (visibleXMax - visibleXMin) * t;

        try {
            // محاسبه y با استفاده از تابع کاربر
            const scope = { x: x };
            const y = math.evaluate(func.expression, scope);

            // بررسی معتبر بودن y
            if (isNaN(y) || !isFinite(y)) continue;

            // تبدیل به مختصات صفحه نمایش
            const screenX = toScreenX(x);
            const screenY = toScreenY(y);

            // بررسی پرش بزرگ (مجانب)
            if (!isFirstPoint && lastY !== null) {
                const deltaY = Math.abs(screenY - lastY);
                if (deltaY > 100) {
                    isFirstPoint = true;
                }
            }

            if (isFirstPoint) {
                app.ctx.moveTo(screenX, screenY);
                isFirstPoint = false;
            } else {
                app.ctx.lineTo(screenX, screenY);
            }

            lastY = screenY;
        } catch (error) {
            console.error('Error evaluating function:', error);
            isFirstPoint = true;
        }
    }

    app.ctx.stroke();
}

// رسم تابع پارامتری
function drawParametricFunction(func) {
    const app = window.graphApp;

    // تبدیل مختصات ریاضی به مختصات کانواس
    function toScreenX(x) {
        return (x + app.offsetX) * app.scale + app.canvas.width / 2;
    }

    function toScreenY(y) {
        return app.canvas.height - ((y + app.offsetY) * app.scale + app.canvas.height / 2);
    }

    app.ctx.strokeStyle = func.color;
    app.ctx.lineWidth = app.lineWidth;
    app.ctx.beginPath();

    // تعداد نقاط براساس کیفیت رسم
    const numPoints = getPointCount('parametric');

    let isFirstPoint = true;
    for (let i = 0; i <= numPoints; i++) {
        const t = func.tMin + (func.tMax - func.tMin) * (i / numPoints);

        try {
            // محاسبه x و y با استفاده از توابع پارامتری
            const scope = { t: t };
            const x = math.evaluate(func.xExpression, scope);
            const y = math.evaluate(func.yExpression, scope);

            // بررسی معتبر بودن x و y
            if (isNaN(x) || !isFinite(x) || isNaN(y) || !isFinite(y)) continue;

            // تبدیل به مختصات صفحه نمایش
            const screenX = toScreenX(x);
            const screenY = toScreenY(y);

            if (isFirstPoint) {
                app.ctx.moveTo(screenX, screenY);
                isFirstPoint = false;
            } else {
                app.ctx.lineTo(screenX, screenY);
            }
        } catch (error) {
            console.error('Error evaluating parametric function:', error);
            isFirstPoint = true;
        }
    }

    app.ctx.stroke();
}

// رسم تابع قطبی
function drawPolarFunction(func) {
    const app = window.graphApp;

    // تبدیل مختصات ریاضی به مختصات کانواس
    function toScreenX(x) {
        return (x + app.offsetX) * app.scale + app.canvas.width / 2;
    }

    function toScreenY(y) {
        return app.canvas.height - ((y + app.offsetY) * app.scale + app.canvas.height / 2);
    }

    app.ctx.strokeStyle = func.color;
    app.ctx.lineWidth = app.lineWidth;
    app.ctx.beginPath();

    // تعداد نقاط براساس کیفیت رسم
    const numPoints = getPointCount('polar');

    let isFirstPoint = true;

    // رسم تابع
    for (let i = 0; i <= numPoints; i++) {
        const theta = func.thetaMin + (func.thetaMax - func.thetaMin) * (i / numPoints);

        try {
            // محاسبه r با استفاده از تابع قطبی
            const scope = { theta: theta };
            const r = math.evaluate(func.rExpression, scope);

            // بررسی معتبر بودن r
            if (isNaN(r) || !isFinite(r)) continue;

            // تبدیل مختصات قطبی به دکارتی
            const x = r * Math.cos(theta);
            const y = r * Math.sin(theta);

            // تبدیل به مختصات صفحه نمایش
            const screenX = toScreenX(x);
            const screenY = toScreenY(y);

            if (isFirstPoint) {
                app.ctx.moveTo(screenX, screenY);
                isFirstPoint = false;
            } else {
                app.ctx.lineTo(screenX, screenY);
            }
        } catch (error) {
            console.error('Error evaluating polar function:', error);
            isFirstPoint = true;
        }
    }

    app.ctx.stroke();
}

// نمایش/مخفی کردن انیمیشن بارگذاری
function showLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('active');
    }
}

function hideLoading() {
    setTimeout(function() {
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.classList.remove('active');
        }
    }, 500);
}

// افزودن تابع استاندارد
function drawFunction() {
    const app = window.graphApp;

    // نمایش انیمیشن بارگذاری
    showLoading();

    // دریافت عبارت تابع و رنگ
    const expression = document.getElementById('function-input').value;
    const color = document.getElementById('function-color').value;

    // بررسی معتبر بودن عبارت
    try {
        // تست یک مقدار برای اطمینان از صحت عبارت
        const scope = { x: 1 };
        math.evaluate(expression, scope);

        // افزودن تابع به لیست
        const func = {
            type: 'standard',
            expression: expression,
            color: color,
            visible: true
        };

        app.functions.push(func);

        // به‌روزرسانی لیست توابع
        updateFunctionList();

        // رسم مجدد نمودار
        drawGraph();

        // نمایش اعلان موفقیت
        showToast('موفقیت', 'تابع با موفقیت رسم شد.', 'success');
    } catch (error) {
        console.error('Error parsing function:', error);
        showToast('خطا', 'عبارت تابع نامعتبر است. لطفاً بررسی کنید.', 'error');
    }

    // مخفی کردن انیمیشن بارگذاری
    hideLoading();
}

// افزودن تابع پارامتری
function drawParametricFunction() {
    const app = window.graphApp;

    // نمایش انیمیشن بارگذاری
    showLoading();

    // دریافت عبارات توابع و رنگ
    const xExpression = document.getElementById('parametric-x').value;
    const yExpression = document.getElementById('parametric-y').value;
    const tMin = parseFloat(document.getElementById('t-min').value);
    const tMax = parseFloat(document.getElementById('t-max').value);
    const color = document.getElementById('parametric-color').value;

    try {
        // تست یک مقدار برای اطمینان از صحت عبارات
        const scope = { t: 0 };
        math.evaluate(xExpression, scope);
        math.evaluate(yExpression, scope);

        // افزودن تابع به لیست
        const func = {
            type: 'parametric',
            xExpression: xExpression,
            yExpression: yExpression,
            tMin: tMin,
            tMax: tMax,
            color: color,
            visible: true
        };

        app.functions.push(func);

        // به‌روزرسانی لیست توابع
        updateFunctionList();

        // رسم مجدد نمودار
        drawGraph();

        // نمایش اعلان موفقیت
        showToast('موفقیت', 'تابع پارامتری با موفقیت رسم شد.', 'success');
    } catch (error) {
        console.error('Error parsing parametric function:', error);
        showToast('خطا', 'عبارات تابع پارامتری نامعتبر هستند. لطفاً بررسی کنید.', 'error');
    }

    // مخفی کردن انیمیشن بارگذاری
    hideLoading();
}

// افزودن تابع قطبی
function drawPolarFunction() {
    const app = window.graphApp;

    // نمایش انیمیشن بارگذاری
    showLoading();

    // دریافت عبارت تابع و رنگ
    const rExpression = document.getElementById('polar-input').value;
    const thetaMin = parseFloat(document.getElementById('theta-min').value);
    const thetaMax = parseFloat(document.getElementById('theta-max').value);
    const color = document.getElementById('polar-color').value;

    // بررسی معتبر بودن عبارت
    try {
        // تست یک مقدار برای اطمینان از صحت عبارت
        const scope = { theta: 0 };
        math.evaluate(rExpression, scope);

        // افزودن تابع به لیست
        const func = {
            type: 'polar',
            rExpression: rExpression,
            thetaMin: thetaMin,
            thetaMax: thetaMax,
            color: color,
            visible: true
        };

        app.functions.push(func);

        // به‌روزرسانی لیست توابع
        updateFunctionList();

        // رسم مجدد نمودار
        drawGraph();

        // نمایش اعلان موفقیت
        showToast('موفقیت', 'تابع قطبی با موفقیت رسم شد.', 'success');
    } catch (error) {
        console.error('Error parsing polar function:', error);
        showToast('خطا', 'عبارت تابع قطبی نامعتبر است. لطفاً بررسی کنید.', 'error');
    }

    // مخفی کردن انیمیشن بارگذاری
    hideLoading();
}

// به‌روزرسانی لیست توابع در رابط کاربری
function updateFunctionList() {
    const app = window.graphApp;
    const functionList = document.getElementById('function-list');
    if (!functionList) return;

    functionList.innerHTML = '';

    app.functions.forEach(function(func, index) {
        const functionItem = document.createElement('div');
        functionItem.className = 'function-item';

        let displayText = '';
        if (func.type === 'standard') {
            displayText = `f(x) = ${func.expression}`;
        } else if (func.type === 'parametric') {
            displayText = `x(t) = ${func.xExpression}, y(t) = ${func.yExpression}`;
        } else if (func.type === 'polar') {
            displayText = `r(θ) = ${func.rExpression}`;
        }

        functionItem.innerHTML = `
            <div class="function-item-color" style="background-color: ${func.color}"></div>
            <div class="function-item-text">${displayText}</div>
            <div class="function-item-actions">
                <button class="function-item-btn visibility-btn" data-index="${index}">
                    <i class="fas ${func.visible ? 'fa-eye' : 'fa-eye-slash'}"></i>
                </button>
                <button class="function-item-btn delete-btn" data-index="${index}">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;

        functionList.appendChild(functionItem);
    });

    // افزودن رویدادها به دکمه‌های لیست توابع
    addFunctionListEvents();
}

// افزودن رویدادها به دکمه‌های لیست توابع
function addFunctionListEvents() {
    const app = window.graphApp;

    // دکمه‌های نمایش/عدم نمایش
    document.querySelectorAll('.visibility-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            app.functions[index].visible = !app.functions[index].visible;

            // به‌روزرسانی آیکون
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');

            // رسم مجدد نمودار
            drawGraph();
        });
    });

    // دکمه‌های حذف
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            app.functions.splice(index, 1);

            // به‌روزرسانی لیست توابع
            updateFunctionList();

            // رسم مجدد نمودار
            drawGraph();

            // نمایش اعلان
            showToast('اطلاعات', 'تابع با موفقیت حذف شد.', 'info');
        });
    });
}

// افزودن فیلد ورودی تابع جدید
function addNewFunctionInput() {
    // پاک کردن فیلد ورودی تابع
    const functionInput = document.getElementById('function-input');
    if (functionInput) {
        functionInput.value = '';
    }

    // تغییر رنگ به یک رنگ تصادفی
    const randomColor = getRandomColor();
    const functionColor = document.getElementById('function-color');
    if (functionColor) {
        functionColor.value = randomColor;
    }

    // نمایش اعلان
    showToast('اطلاعات', 'فیلد ورودی برای تابع جدید آماده است.', 'info');
}

// تولید رنگ تصادفی
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// حذف همه توابع
function clearAllFunctions() {
    const app = window.graphApp;

    if (app.functions.length === 0) {
        showToast('اطلاعات', 'هیچ تابعی برای حذف وجود ندارد.', 'info');
        return;
    }

    app.functions = [];

    // به‌روزرسانی لیست توابع
    updateFunctionList();

    // رسم مجدد نمودار
    drawGraph();

    // نمایش اعلان
    showToast('موفقیت', 'همه توابع با موفقیت حذف شدند.', 'success');
}

// بازنشانی نما
function resetView() {
    const app = window.graphApp;

    app.scale = 1;
    app.offsetX = 0;
    app.offsetY = 0;

    // به‌روزرسانی اطلاعات مقیاس
    updateScaleInfo();

    // رسم مجدد نمودار
    drawGraph();

    // نمایش اعلان
    showToast('اطلاعات', 'نما به حالت اولیه بازنشانی شد.', 'info');
}

// نمایش/عدم نمایش شبکه
function toggleGrid() {
    const app = window.graphApp;
    app.showGrid = !app.showGrid;

    // رسم مجدد نمودار
    drawGraph();
}

// نمایش/عدم نمایش محورها
function toggleAxes() {
    const app = window.graphApp;
    app.showAxes = !app.showAxes;

    // رسم مجدد نمودار
    drawGraph();
}

// نمایش/عدم نمایش برچسب‌ها
function toggleLabels() {
    const app = window.graphApp;
    app.showLabels = !app.showLabels;

    // رسم مجدد نمودار
    drawGraph();
}

// اعمال محدوده جدید محورها
function applyAxisRange() {
    const app = window.graphApp;

    const xMinElem = document.getElementById('x-min');
    const xMaxElem = document.getElementById('x-max');
    const yMinElem = document.getElementById('y-min');
    const yMaxElem = document.getElementById('y-max');

    if (!xMinElem || !xMaxElem || !yMinElem || !yMaxElem) return;

    const newXMin = parseFloat(xMinElem.value);
    const newXMax = parseFloat(xMaxElem.value);
    const newYMin = parseFloat(yMinElem.value);
    const newYMax = parseFloat(yMaxElem.value);

    // بررسی معتبر بودن محدوده
    if (newXMin >= newXMax || newYMin >= newYMax) {
        showToast('خطا', 'محدوده نامعتبر است. مقدار حداکثر باید بزرگتر از مقدار حداقل باشد.', 'error');
        return;
    }

    // تنظیم مقادیر جدید
    app.xMin = newXMin;
    app.xMax = newXMax;
    app.yMin = newYMin;
    app.yMax = newYMax;

    // تنظیم مقیاس و جابجایی براساس محدوده جدید
    const canvasWidth = app.canvas.width;
    const canvasHeight = app.canvas.height;

    const scaleX = canvasWidth / (app.xMax - app.xMin);
    const scaleY = canvasHeight / (app.yMax - app.yMin);

    // استفاده از کوچکترین مقیاس برای حفظ نسبت ابعاد
    app.scale = Math.min(scaleX, scaleY) * 0.9;

    // تنظیم جابجایی
    app.offsetX = -(app.xMin + app.xMax) / 2;
    app.offsetY = -(app.yMin + app.yMax) / 2;

    // به‌روزرسانی اطلاعات مقیاس
    updateScaleInfo();

    // رسم مجدد نمودار
    drawGraph();

    // نمایش اعلان
    showToast('موفقیت', 'محدوده محورها با موفقیت اعمال شد.', 'success');
}

// ذخیره تصویر نمودار
function saveImage() {
    const app = window.graphApp;

    // ایجاد لینک دانلود
    const link = document.createElement('a');
    link.download = 'graph.png';

    // تبدیل کانواس به URL داده
    link.href = app.canvas.toDataURL('image/png');

    // کلیک روی لینک برای دانلود
    link.click();

    // نمایش اعلان
    showToast('موفقیت', 'تصویر نمودار با موفقیت ذخیره شد.', 'success');
}

// بارگذاری پیش‌نمایش‌های آماده
function loadPreset(preset) {
    const app = window.graphApp;

    // نمایش انیمیشن بارگذاری
    showLoading();

    try {
        // حذف همه توابع قبلی
        app.functions = [];

        // تنظیم محدوده محورها و توابع براساس پیش‌نمایش انتخاب شده
        switch (preset) {
            case 'parabola': // سهمی
                app.functions.push({
                    type: 'standard',
                    expression: 'x^2',
                    color: '#0066cc',
                    visible: true
                });
                // تنظیم محدوده مناسب برای سهمی
                app.xMin = -5;
                app.xMax = 5;
                app.yMin = -2;
                app.yMax = 25;
                break;

            case 'sine': // سینوسی
                app.functions.push({
                    type: 'standard',
                    expression: 'sin(x)',
                    color: '#e91e63',
                    visible: true
                });
                // تنظیم محدوده مناسب برای تابع سینوسی
                app.xMin = -10;
                app.xMax = 10;
                app.yMin = -1.5;
                app.yMax = 1.5;
                break;

            case 'circle': // دایره - از تابع استاندارد استفاده میکنیم
                app.functions.push({
                    type: 'standard',
                    expression: 'sqrt(9-x^2)',  // نیم دایره بالایی
                    color: '#4caf50',
                    visible: true
                });
                app.functions.push({
                    type: 'standard',
                    expression: '-sqrt(9-x^2)', // نیم دایره پایینی
                    color: '#4caf50',
                    visible: true
                });
                // تنظیم محدوده مناسب برای دایره
                app.xMin = -4;
                app.xMax = 4;
                app.yMin = -4;
                app.yMax = 4;
                break;

            case 'flower': // گل - از تابع استاندارد استفاده میکنیم
                app.functions.push({
                    type: 'standard',
                    expression: 'sqrt(25-x^2)*cos(x)',
                    color: '#ff9800',
                    visible: true
                });
                app.functions.push({
                    type: 'standard',
                    expression: '-sqrt(25-x^2)*cos(x)',
                    color: '#ff9800',
                    visible: true
                });
                // تنظیم محدوده مناسب برای گل
                app.xMin = -6;
                app.xMax = 6;
                app.yMin = -6;
                app.yMax = 6;
                break;

            case 'heart': // قلب - از تابع استاندارد استفاده میکنیم با منحنی ساده‌تر
                app.functions.push({
                    type: 'standard',
                    expression: 'sqrt(1-abs(x))*cos(pi*x)',
                    color: '#f44336',
                    visible: true
                });
                app.functions.push({
                    type: 'standard',
                    expression: '-sqrt(1-abs(x))*cos(pi*x)',
                    color: '#f44336',
                    visible: true
                });
                // تنظیم محدوده مناسب برای قلب
                app.xMin = -2;
                app.xMax = 2;
                app.yMin = -2;
                app.yMax = 2;
                break;

            case 'butterfly': // پروانه - از تابع استاندارد استفاده میکنیم با منحنی ساده‌تر
                app.functions.push({
                    type: 'standard',
                    expression: 'sin(x)*(exp(cos(x))-2*cos(4*x))/5',
                    color: '#9c27b0',
                    visible: true
                });
                // تنظیم محدوده مناسب برای پروانه
                app.xMin = -4;
                app.xMax = 4;
                app.yMin = -1;
                app.yMax = 1;
                break;
        }

        // تنظیم مقیاس و جابجایی براساس محدوده جدید
        const canvasWidth = app.canvas.width;
        const canvasHeight = app.canvas.height;

        const scaleX = canvasWidth / (app.xMax - app.xMin);
        const scaleY = canvasHeight / (app.yMax - app.yMin);

        // استفاده از کوچکترین مقیاس برای حفظ نسبت ابعاد
        app.scale = Math.min(scaleX, scaleY) * 0.9;

        // تنظیم جابجایی
        app.offsetX = -(app.xMin + app.xMax) / 2;
        app.offsetY = -(app.yMin + app.yMax) / 2;

        // به‌روزرسانی فیلدهای ورودی محدوده
        const xMinElem = document.getElementById('x-min');
        const xMaxElem = document.getElementById('x-max');
        const yMinElem = document.getElementById('y-min');
        const yMaxElem = document.getElementById('y-max');

        if (xMinElem) xMinElem.value = app.xMin;
        if (xMaxElem) xMaxElem.value = app.xMax;
        if (yMinElem) yMinElem.value = app.yMin;
        if (yMaxElem) yMaxElem.value = app.yMax;

        // تنظیم کیفیت رسم به پایین برای اشکال پیچیده
        if (preset === 'heart' || preset === 'butterfly') {
            const qualitySelect = document.getElementById('quality-select');
            if (qualitySelect) {
                qualitySelect.value = 'low';
                app.renderQuality = 'low';
            }
        }

        // به‌روزرسانی لیست توابع
        updateFunctionList();

        // به‌روزرسانی اطلاعات مقیاس
        updateScaleInfo();

        // رسم مجدد نمودار
        drawGraph();

        // نمایش اعلان
        showToast('موفقیت', `پیش‌نمایش "${preset}" با موفقیت بارگذاری شد.`, 'success');
    } catch (error) {
        console.error('Error loading preset:', error);
        showToast('خطا', 'خطا در بارگذاری پیش‌نمایش. لطفاً دوباره تلاش کنید.', 'error');
    }

    // مخفی کردن انیمیشن بارگذاری
    hideLoading();
}

// نمایش اعلان
function showToast(title, message, type) {
    // ایجاد المان اعلان
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    // انتخاب آیکون مناسب براساس نوع اعلان
    let icon = '';
    switch (type) {
        case 'success':
            icon = '<i class="fas fa-check-circle"></i>';
            break;
        case 'error':
            icon = '<i class="fas fa-exclamation-circle"></i>';
            break;
        case 'warning':
            icon = '<i class="fas fa-exclamation-triangle"></i>';
            break;
        case 'info':
            icon = '<i class="fas fa-info-circle"></i>';
            break;
    }

    // تنظیم محتوای اعلان
    toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close">&times;</button>
    `;

    // افزودن اعلان به ظرف اعلان‌ها
    const toastContainer = document.getElementById('toast-container');
    if (toastContainer) {
        toastContainer.appendChild(toast);

        // نمایش اعلان با تاخیر کوتاه
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        // حذف اعلان پس از 3 ثانیه
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);

        // افزودن رویداد کلیک به دکمه بستن
        const closeBtn = toast.querySelector('.toast-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                toast.classList.remove('show');
                setTimeout(() => {
                    toast.remove();
                }, 300);
            });
        }
    }
}

// به‌روزرسانی متن‌های زبان
function updateGraphPageLanguage() {
    const isEnglish = document.documentElement.lang === 'en';

    // به‌روزرسانی مقیاس
    updateScaleInfo();

    // به‌روزرسانی کیفیت رسم
    const qualitySelect = document.getElementById('quality-select');
    if (qualitySelect) {
        // حذف گزینه‌های قبلی
        while (qualitySelect.firstChild) {
            qualitySelect.removeChild(qualitySelect.firstChild);
        }

        // افزودن گزینه‌های جدید
        const options = [
            { value: 'low', fa: 'پایین (سریع)', en: 'Low (Fast)' },
            { value: 'medium', fa: 'متوسط', en: 'Medium' },
            { value: 'high', fa: 'بالا (کند)', en: 'High (Slow)' }
        ];

        options.forEach(option => {
            const optElement = document.createElement('option');
            optElement.value = option.value;
            optElement.textContent = isEnglish ? option.en : option.fa;
            if (option.value === window.graphApp.renderQuality) {
                optElement.selected = true;
            }
            qualitySelect.appendChild(optElement);
        });
    }

    // رسم مجدد نمودار برای به‌روزرسانی برچسب‌ها
    if (window.graphApp.initialized) {
        drawGraph();
    }
}

// اضافه کردن رویداد تغییر زبان برای صفحه رسم نمودار
document.addEventListener('languageChanged', function() {
    updateGraphPageLanguage();
});

// اضافه کردن رویداد تغییر تم برای صفحه رسم نمودار
document.addEventListener('themeChanged', function() {
    if (window.graphApp.initialized) {
        drawGraph();
    }
});

// بررسی تغییر زبان و به‌روزرسانی متن‌ها
function checkLanguageAndUpdate() {
    // به‌روزرسانی متن‌های نمایشی به زبان جدید
    updateGraphPageLanguage();
}

// ایجاد رویداد تغییر زبان
function createLanguageEvent() {
    // این تابع باید در فایل اصلی سایت فراخوانی شود
    const event = new Event('languageChanged');
    document.dispatchEvent(event);
}

// ایجاد رویداد تغییر تم
function createThemeEvent() {
    // این تابع باید در فایل اصلی سایت فراخوانی شود
    const event = new Event('themeChanged');
    document.dispatchEvent(event);
}

// اضافه کردن این توابع به window برای دسترسی از خارج
window.showGraphPage = showGraphPage;
window.closeGraphPage = closeGraphPage;
window.createLanguageEvent = createLanguageEvent;
window.createThemeEvent = createThemeEvent;

     // تنظیمات هوش مصنوعی
document.addEventListener('DOMContentLoaded', function() {
    // یافتن دکمه هوش مصنوعی در صفحه اصلی و اضافه کردن رویداد کلیک
    const aiButton = document.querySelector('.icon-button:nth-child(5)');
    if (aiButton) {
        aiButton.addEventListener('click', function() {
            showAIPage();
        });
    }

    // تنظیم رویدادهای مربوط به صفحه هوش مصنوعی
    setupAIPage();
});

// نمایش صفحه هوش مصنوعی
function showAIPage() {
    const aiPage = document.getElementById('aiPage');
    if (aiPage) {
        aiPage.classList.add('active');
    } else {
        console.error('AI page element not found');
    }
}

// بستن صفحه هوش مصنوعی
function closeAIPage() {
    const aiPage = document.getElementById('aiPage');
    if (aiPage) {
        aiPage.classList.remove('active');
        resetAIPage(); // بازگشت به حالت اولیه
    }
}

// بازگشت به حالت اولیه
function resetAIPage() {
    const aiIntro = document.getElementById('aiIntro');
    const chatInterface = document.getElementById('chatInterface');

    if (aiIntro && chatInterface) {
        aiIntro.classList.remove('hidden');
        chatInterface.classList.remove('active');
    }

    // پاک کردن پیام‌های قبلی (به جز پیام خوش‌آمدگویی)
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        const welcomeMessage = chatMessages.querySelector('.bot-message');
        chatMessages.innerHTML = '';
        if (welcomeMessage) {
            chatMessages.appendChild(welcomeMessage);
        }
    }

    // پاک کردن فیلد ورودی
    const userInput = document.getElementById('userInput');
    if (userInput) {
        userInput.value = '';
        userInput.style.height = 'auto';
    }
}

// باز کردن رابط چت
function openChatInterface() {
    const aiIntro = document.getElementById('aiIntro');
    const chatInterface = document.getElementById('chatInterface');

    if (aiIntro && chatInterface) {
        aiIntro.classList.add('hidden');
        setTimeout(() => {
            chatInterface.classList.add('active');
            const userInput = document.getElementById('userInput');
            if (userInput) {
                userInput.focus();
            }
        }, 300);
    }
}

// تنظیم رویدادهای مربوط به صفحه هوش مصنوعی
function setupAIPage() {
    // دکمه بازگشت
    const backButton = document.getElementById('aiBackButton');
    if (backButton) {
        backButton.addEventListener('click', function() {
            closeAIPage();
        });
    }

    // دکمه شروع گفتگو
    const startChatBtn = document.getElementById('startChatBtn');
    const startChatBtnEn = document.getElementById('startChatBtnEn');

    if (startChatBtn) {
        startChatBtn.addEventListener('click', function() {
            openChatInterface();
        });
    }

    if (startChatBtnEn) {
        startChatBtnEn.addEventListener('click', function() {
            openChatInterface();
        });
    }

    // انتخاب مدل
    const modelSelectBtn = document.getElementById('modelSelectBtn');
    const modelDropdown = document.getElementById('modelDropdown');
    const modelOptions = document.querySelectorAll('.model-option');

    if (!modelSelectBtn || !modelDropdown) {
        return;
    }

    // مدل پیش‌فرض
    let selectedModel = "gpt-4o";

    // باز و بسته کردن منوی انتخاب مدل
    modelSelectBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        modelSelectBtn.classList.toggle('active');
        modelDropdown.classList.toggle('active');
    });

    // انتخاب مدل
    modelOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();

            // حذف کلاس active از همه گزینه‌ها
            modelOptions.forEach(opt => opt.classList.remove('active'));

            // اضافه کردن کلاس active به گزینه انتخاب شده
            this.classList.add('active');

            // ذخیره مدل انتخاب شده
            selectedModel = this.getAttribute('data-model');

            // نمایش مدل انتخاب شده در دکمه
            const modelName = this.textContent;
            const btnText = document.documentElement.lang === 'fa' ? 'مدل: ' + modelName : 'Model: ' + modelName;
            modelSelectBtn.innerHTML = btnText + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';

            // بستن منوی انتخاب مدل
            modelDropdown.classList.remove('active');
            modelSelectBtn.classList.remove('active');
        });
    });

    // بستن منوی انتخاب مدل با کلیک بیرون از آن
    document.addEventListener('click', function(event) {
        if (modelSelectBtn && modelDropdown && !modelSelectBtn.contains(event.target) && !modelDropdown.contains(event.target)) {
            modelDropdown.classList.remove('active');
            modelSelectBtn.classList.remove('active');
        }
    });

    // ارسال پیام کاربر
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const chatMessages = document.getElementById('chatMessages');

    if (!userInput || !sendButton || !chatMessages) {
        return;
    }

    // تنظیم ارتفاع خودکار برای textarea
    userInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
        if (this.scrollHeight > 150) {
            this.style.overflowY = 'auto';
        } else {
            this.style.overflowY = 'hidden';
        }
    });

    // ارسال پیام با دکمه Enter
    userInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });

    // ارسال پیام با دکمه ارسال
    sendButton.addEventListener('click', sendMessage);

    // تابع ارسال پیام
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;

        // نمایش پیام کاربر
        addUserMessage(message);

        // پاک کردن فیلد ورودی
        userInput.value = '';
        userInput.style.height = 'auto';

        // نمایش نشانگر در حال تایپ
        addTypingIndicator();

        // ارسال پیام به API
        sendToAPI(message, selectedModel);
    }

    // اضافه کردن پیام کاربر به چت
    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message user-message';

        messageElement.innerHTML = `
            <div class="message-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
            <div class="message-content">
                <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
        `;

        chatMessages.appendChild(messageElement);
        scrollToBottom();
    }

    // اضافه کردن پیام بات به چت
    function addBotMessage(message) {
        // حذف نشانگر در حال تایپ
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.parentElement.parentElement.remove();
        }

        const messageElement = document.createElement('div');
        messageElement.className = 'message bot-message';

        // پردازش کد و فرمول‌های ریاضی در پیام
        let processedMessage = message;

        // تبدیل کد به بلوک کد
        processedMessage = processedMessage.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

        // تبدیل خط جدید به <br>
        processedMessage = processedMessage.replace(/\n/g, '<br>');

        messageElement.innerHTML = `
            <div class="message-avatar">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="#0066cc" />
                    <path d="M30 50 Q50 20 70 50 Q50 80 30 50 Z" fill="white" />
                </svg>
            </div>
            <div class="message-content">
                <p>${processedMessage}</p>
            </div>
        `;

        chatMessages.appendChild(messageElement);
        scrollToBottom();
    }

    // اضافه کردن نشانگر در حال تایپ
    function addTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.className = 'message bot-message';

        typingElement.innerHTML = `
            <div class="message-avatar">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="#0066cc" />
                    <path d="M30 50 Q50 20 70 50 Q50 80 30 50 Z" fill="white" />
                </svg>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;

        chatMessages.appendChild(typingElement);
        scrollToBottom();
    }

    // اسکرول به پایین چت
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // ارسال پیام به API
    function sendToAPI(message, model) {
        // تنظیم پیام با محدودیت مربوط به ریاضی
        const messages = [
            {
                "role": "system",
                "content": "شما یک دستیار هوش مصنوعی متخصص در ریاضیات هستید. لطفاً فقط به سؤالات مرتبط با ریاضی پاسخ دهید و از راهنمایی و کمک در زمینه‌های دیگر خودداری کنید. در صورتی که سؤال مرتبط با ریاضی نباشد، با احترام توضیح دهید که فقط می‌توانید در زمینه ریاضیات کمک کنید. سعی کنید پاسخ‌های خود را با مثال‌ها و توضیحات روشن همراه کنید تا به درک بهتر مفاهیم ریاضی کمک نمایید."
            },
            {
                "role": "user",
                "content": message
            }
        ];

        // تنظیمات درخواست API
        const apiKey = "sk-rRbtNpsqbiXliS4wJtTPx5HUz3qH46CTiDJM9VYk";
        const url = "https://free.yunwu.ai/v1/chat/completions";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: model,
                messages: messages
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const reply = data.choices[0].message.content;
            addBotMessage(reply);
        })
        .catch(error => {
            addBotMessage("متأسفانه خطایی در ارتباط با سرور رخ داد. لطفاً دوباره تلاش کنید.");
        });
    }
}