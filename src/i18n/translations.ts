export const translations = {
  en: {
    stepOne: {
      title: "Let's create your personal workout plan",
      height: "Your height (cm)",
      weight: "Your weight (kg)",
    },
    stepTwo: {
      title: "Pick your workout days",
      days: {
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
      },
    },
    stepThree: {
      title: "What is your fitness goal?",
      goals: {
        loseWeight: "Lose weight",
        buildMuscle: "Build muscle",
        stayHealthy: "Stay healthy",
      },
    },
    stepFour: {
      title: "Final step. Complete your registration",
      name: "Name",
      surname: "Surname",
      email: "E-mail",
      password: "Password",
    },
    buttons: {
      back: "Back",
      next: "Next",
      save: "Save",
      done: "Done",
    },
    success: {
      title: "Success!",
      message: "Your membership has been created successfully.",
    },
    validation: {
      weight: {
        typeError: "Weight must be a number",
        positive: "Weight must be positive",
        min: "Weight must be at least 30 kg",
        max: "Weight cannot exceed 250 kg",
        required: "Weight is required",
      },
      height: {
        required: "Height is required",
        typeError: "Height must be a number",
        positive: "Height must be positive",
        min: "Height must be at least 100 cm",
        max: "Height cannot exceed 250 cm",
      },
      ratio: {
        typeError: "Ratio must be a number",
        positive: "Ratio must be positive",
      },
      days: {
        min: "Please select at least one day",
        required: "Please select workout days",
      },
      goal: {
        required: "Please select your fitness goal",
      },
      email: {
        required: "Email is required",
        invalid: "Please enter a valid email address",
        format: "Please enter a valid email format (example@domain.com)",
      },
      password: {
        required: "Password is required",
        min: "Password must be at least 8 characters",
        format:
          "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
      },
      fullName: {
        required: "Name is required",
        format: "Name must contain only letters",
      },
      surname: {
        required: "Surname is required",
        format: "Surname must contain only letters",
      },
    },
    errors: {
      fetchWorkouts: "Failed to load workouts",
      addWorkout: "Failed to add workout",
      updateWorkout: "Failed to update workout",
      deleteWorkout: "Failed to delete workout",
      networkError: "Network connection error",
      serverError: "Server error occurred",
    },
  },
  ar: {
    stepOne: {
      title: "دعنا ننشئ خطة التمرين الخاصة بك",
      height: "طولك (سم)",
      weight: "وزنك (كجم)",
    },
    stepTwo: {
      title: "اختر أيام التمرين",
      days: {
        monday: "الاثنين",
        tuesday: "الثلاثاء",
        wednesday: "الأربعاء",
        thursday: "الخميس",
        friday: "الجمعة",
        saturday: "السبت",
        sunday: "الأحد",
      },
    },
    stepThree: {
      title: "ما هو هدفك من اللياقة البدنية؟",
      goals: {
        loseWeight: "خسارة الوزن",
        buildMuscle: "بناء العضلات",
        stayHealthy: "البقاء بصحة جيدة",
      },
    },
    stepFour: {
      title: "الخطوة الأخيرة. أكمل تسجيلك",
      name: "الاسم",
      surname: "اللقب",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
    },
    buttons: {
      back: "رجوع",
      next: "التالي",
      save: "حفظ",
      done: "تم",
    },
    success: {
      title: "تم بنجاح!",
      message: "تم إنشاء عضويتك بنجاح.",
    },
    validation: {
      weight: {
        typeError: "يجب أن يكون الوزن رقمًا",
        positive: "يجب أن يكون الوزن موجبًا",
        min: "يجب أن يكون الوزن 30 كجم على الأقل",
        max: "لا يمكن أن يتجاوز الوزن 250 كجم",
        required: "الوزن مطلوب",
      },
      height: {
        required: "الطول مطلوب",
        typeError: "يجب أن يكون الطول رقمًا",
        positive: "يجب أن يكون الطول موجبًا",
        min: "يجب أن يكون الطول 100 سم على الأقل",
        max: "لا يمكن أن يتجاوز الطول 250 سم",
      },
      ratio: {
        typeError: "يجب أن تكون النسبة رقمًا",
        positive: "يجب أن تكون النسبة موجبة",
      },
      days: {
        min: "الرجاء اختيار يوم واحد على الأقل",
        required: "الرجاء اختيار أيام التمرين",
      },
      goal: {
        required: "الرجاء اختيار هدفك",
      },
      email: {
        required: "البريد الإلكتروني مطلوب",
        invalid: "الرجاء إدخال بريد إلكتروني صحيح",
        format: "الرجاء إدخال تنسيق بريد إلكتروني صحيح",
      },
      password: {
        required: "كلمة المرور مطلوبة",
        min: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل",
        format: "يجب أن تحتوي كلمة المرور على حرف كبير وحرف صغير ورقم ورمز خاص",
      },
      fullName: {
        required: "الاسم مطلوب",
        format: "يجب أن يحتوي الاسم على أحرف فقط",
      },
      surname: {
        required: "اللقب مطلوب",
        format: "يجب أن يحتوي اللقب على أحرف فقط",
      },
    },
    errors: {
      fetchWorkouts: "فشل في تحميل التمارين",
      addWorkout: "فشل في إضافة التمرين",
      updateWorkout: "فشل في تحديث التمرين",
      deleteWorkout: "فشل في حذف التمرين",
      networkError: "خطأ في اتصال الشبكة",
      serverError: "حدث خطأ في الخادم",
    },
  },
};
