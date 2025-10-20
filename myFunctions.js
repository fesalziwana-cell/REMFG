
function showAppDetails(appId) {
    var detailBox = document.getElementById("appDetailsBox");
    var title = document.getElementById("appDetailTitle");
    var content = document.getElementById("appDetailContent");
    
    
    detailBox.style.display = "block";
    
    
    if (appId === 'faceapp') {
        title.textContent = "تفاصيل تطبيق Face App";
        content.innerHTML = `
            <div class="detail-item">
                <strong>الموقع الإلكتروني:</strong> 
                <a href="https://www.faceapp.com" target="_blank">https://www.faceapp.com</a>
            </div>
            <div class="detail-item">
                <strong>الشرح المختصر:</strong>
                <p>Face App هو تطبيق ذكاء اصطناعي متخصص في تحرير الصور وتحسين الوجوه. يتميز بقدرته على تغيير ملامح الوجه، إضافة الابتسامات، تعديل العمر، تغيير تسريحات الشعر، وتحسين جودة الصور باستخدام تقنيات الشبكات العصبية العميقة. التطبيق يوفر نتائج واقعية وفورية.</p>
            </div>
            <div class="detail-item">
                <strong>اللوغو:</strong><br>
                <img src="images/face app.jpeg" alt="Face App" class="app-logo">
            </div>
        `;
    }
    else if (appId === 'invideo') {
        title.textContent = "تفاصيل تطبيق Invideo AI";
        content.innerHTML = `
            <div class="detail-item">
                <strong>الموقع الإلكتروني:</strong> 
                <a href="https://invideo.io" target="_blank">https://invideo.io</a>
            </div>
            <div class="detail-item">
                <strong>الشرح المختصر:</strong>
                <p>Invideo AIهو منصة ذكاء اصطناعي متخصصة في إنشاء الفيديوهات. يحول النصوص إلى فيديوهات احترافية باستخدام تقنيات الذكاء الاصطناعي، مع إمكانية إضافة مؤثرات بصرية، موسيقى، ونصوص تلقائية.  المحتوى والمسوقين .</p>
            </div>
            <div class="detail-item">
                <strong>اللوغو:</strong><br>
                <img src="images/inv.jpeg" alt="Invideo AI" class="app-logo">
            </div>
        `;
    }
    else if (appId === 'copilot') {
        title.textContent = "تفاصيل تطبيق Microsoft Copilot";
        content.innerHTML = `
            <div class="detail-item">
                <strong>الموقع الإلكتروني:</strong> 
                <a href="https://copilot.microsoft.com" target="_blank">https://copilot.microsoft.com</a>
            </div>
            <div class="detail-item">
                <strong>الشرح المختصر:</strong>
                <p>Microsoft Copilot هو مساعد ذكي يعمل بالذكاء الاصطناعي، يساعد في المهام اليومية مثل البرمجة، الكتابة، البحث، وتحليل البيانات. يتكامل مع أدوات Microsoft ويوفر اقتراحات ذكية لتحسين الإنتاجية..</p>
            </div>
            <div class="detail-item">
                <strong>اللوغو:</strong><br>
                <img src="images/micr.jpeg" alt="Microsoft Copilot" class="app-logo">
            </div>
        `;
    }
    else if (appId === 'deepseek') {
        title.textContent = "تفاصيل تطبيق Deepseek";
        content.innerHTML = `
            <div class="detail-item">
                <strong>الموقع الإلكتروني:</strong> 
                <a href="https://www.deepseek.com" target="_blank">https://www.deepseek.com</a>
            </div>
            <div class="detail-item">
                <strong>الشرح المختصر:</strong>
                <p>DeepSeek هو مساعد ذكي متقدم يعمل بالذكاء الاصطناعي، يوفر إجابات دقيقة ومساعدة في مجالات متعددة مثل البرمجة، الكتابة، التحليل والبحث. يدعم العديد من اللغات ويتميز بقدراته الفهم العميقة للمحتوى..</p>
            </div>
            <div class="detail-item">
                <strong>اللوغو:</strong><br>
                <img src="images/dee.png" alt="Deepseek" class="app-logo">
            </div>
        `;
    }
    else if (appId === 'starry') {
        title.textContent = "تفاصيل تطبيق Starry AI";
        content.innerHTML = `
            <div class="detail-item">
                <strong>الموقع الإلكتروني:</strong> 
                <a href="https://starryai.com" target="_blank">https://starryai.com</a>
            </div>
            <div class="detail-item">
                <strong>الشرح المختصر:</strong>
                <p>Starry AI هو تطبيق ذكاء اصطناعي متخصص في توليد الفنون الرقمية والصور الإبداعية. يحول الأوصاف النصية إلى لوحات فنية فريدة باستخدام تقنيات التعلم العميق، مع خيارات متعددة للأنماط الفنية والدقة.</p>
            </div>
            <div class="detail-item">
                <strong>اللوغو:</strong><br>
                <img src="images/sta.jpeg" alt="Starry AI" class="app-logo">
            </div>
        `;
    }
}


function hideAppDetails() {
    document.getElementById("appDetailsBox").style.display = "none";
}


function validateAppForm() {
    
    var appName = document.getElementById("appName").value.trim();
    var company = document.getElementById("company").value.trim();
    var category = document.getElementById("category").value;
    var website = document.getElementById("website").value.trim();
    var description = document.getElementById("description").value.trim();
    
   
    if (appName === "") {
        showFormMessage("يرجى إدخال اسم التطبيق", "error");
        document.getElementById("appName").focus();
        return false;
    }
    
    if (company === "") {
        showFormMessage("يرجى إدخال اسم الشركة", "error");
        document.getElementById("company").focus();
        return false;
    }
    
    if (category === "") {
        showFormMessage("يرجى اختيار مجال الاستخدام", "error");
        document.getElementById("category").focus();
        return false;
    }
    
    if (website === "") {
        showFormMessage("يرجى إدخال الموقع الإلكتروني", "error");
        document.getElementById("website").focus();
        return false;
    }
    
    if (description === "") {
        showFormMessage("يرجى إدخال شرح عن التطبيق", "error");
        document.getElementById("description").focus();
        return false;
    }
    
    var englishRegex = /^[A-Za-z]+$/;
    if (!englishRegex.test(appName)) {
        showFormMessage("اسم التطبيق يجب أن يحتوي على أحرف إنجليزية فقط بدون فراغات", "error");
        document.getElementById("appName").focus();
        return false;
    }
    
   
    if (!englishRegex.test(company)) {
        showFormMessage("اسم الشركة يجب أن يحتوي على أحرف إنجليزية فقط بدون فراغات", "error");
        document.getElementById("company").focus();
        return false;
    }
    
    
    var urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-])\/?$/;
    if (!urlRegex.test(website)) {
        showFormMessage("يرجى إدخال رابط موقع إلكتروني صحيح", "error");
        document.getElementById("website").focus();
        return false;
    }
    
    
    showFormMessage("✅ تم إرسال البيانات بنجاح! جاري الانتقال إلى صفحة التطبيقات...", "success");
    
    
    setTimeout(function() {
        window.location.href = "apps.html";
    }, 3000);
    
    return false; 
}


function resetAppForm() {
    document.getElementById("appForm").reset();
    document.getElementById("formMessage").innerHTML = "";
}


function showFormMessage(message, type) {
    var messageDiv = document.getElementById("formMessage");
    messageDiv.innerHTML = '<div class="' + type + '">' + message + '</div>';
    
    setTimeout(function() {
        messageDiv.innerHTML = '';
    }, 5000);
}


function initPage() {
    console.log("تم تحميل الصفحة بنجاح");
}


window.onload = initPage;