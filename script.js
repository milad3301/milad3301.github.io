function generateSubscription(type) {
    const textarea = document.getElementById('subscription-link');
    console.log('تست: دکمه کلیک شد برای ' + type); // اضافه کردن این خط
    textarea.value = لینک اشتراک ${type} (نمونه برای تست);
}

function copyLink() {
    const textarea = document.getElementById('subscription-link');
    if (textarea.value) {
        textarea.select();
        document.execCommand('copy');
        alert('لینک کپی شد!');
    } else {
        alert('اول یه نوع پراکسی انتخاب کن!');
    }
}