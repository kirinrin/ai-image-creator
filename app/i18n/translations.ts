export const translations = {
    zh: {
        app: {
            title: "AI图像生成器",
        },
        navigation: {
            features: "功能介绍",
            samples: "作品展示",
            price: "价格",
            start: "开始创作",
        },
        auth: {
            login: "登录",
            logout: "退出",
            signUp: "注册",
            email: "邮箱",
            password: "密码",
            rememberMe: "记住我",
            forgotPassword: "忘记密码？",
            loginTitle: "登录您的账户",
            loginWithGithub: "使用 GitHub 登录",
            or: "或",
            verifyCode: "验证码",
            sendCode: "发送验证码",
        },
        landing: {
            title: "AI图像生成器",
            description: "基于AI技术将你的照片转换为艺术作品，并生成各种风格的图像，哪怕只是一句话也能生成令人惊叹的图像。可以选择GPT-4o、豆包等多种图像生成模型。",
            getStarted: "开始创作",
            learnMore: "浏览作品",
        },
        // 新增：功能介绍区块
        featuresSection: {
            sectionTitle: "动动手指，AI 帮你把图画出来",
            sectionDesc: "用最先进的 AI 技术，帮你把脑海里的创意变成好看的图，不用画画功底，也能做出专业级作品。",
            features: [
                {
                    title: "风格多样，想怎么画就怎么画",
                    desc: "梦幻吉卜力、潮流动漫、精致3D卡通、复古胶片……上百种风格随你选。灵感来了，立刻就能画出来。"
                },
                {
                    title: "指令清楚，画得如你所想",
                    desc: "强大的AI能看懂你的长指令，动作、镜头、光线，全都能准确表现，效果真实，细节满满。"
                },
                {
                    title: "图和字搭配，表达更到位",
                    desc: "不管是做海报、做梗图，还是做教学图，只要你输入文字，就能自动加上合适的画面，清楚又吸引人。"
                },
                {
                    title: "现成模板，新手也能上手",
                    desc: "我们准备了很多好用的提示词模板，都是大家用过验证的，简单易懂，没经验也能轻松做出好作品。"
                }
            ]
        },
        // 价格区块
        priceSection: {
            sectionTitle: "价格",
            sectionDesc: "选择适合你的付费计划",
            sectionSubDesc: "选择一个性价比高的计划，享受最好的功能，和最优惠的价格。",
            plans: [
                {
                    name: "个人尝试版",
                    desc: "适合个人初次尝试，用于评估AI生成图片的效果。",
                    features: ["5次图片生成", "邮件支持", "图片下载"],
                    buy: "立即购买"
                },
                {
                    name: "批量购买版",
                    desc: "适合团队使用，用于批量生成图片，商业化使用。",
                    features: ["5次图片生成", "邮件支持", "图片下载", "即时通讯工具支持"],
                    buy: "立即购买"
                }
            ]
        },
        // 作品展示区块
        sampleSection: {
            sectionTitle: "只用一句话，就可以生成这样的图",
            sectionDesc: "我们准备了很多好用的提示词模板，都是大家用过验证的，简单易懂，没经验也能轻松做出好作品。",
            styles: [
                "梦幻吉卜力风格", "潮流动漫风格", "卡通风格", "名作再创作", "海报直出（3D）", "奇幻场景", "怀旧卡通风格", "照片3D化"
            ]
        },
        // 页脚
        footer: {
            slogan: "通过 AI 驱动的创新工具，让创作变得更简单、更智能、更高效。",
            copyright: "All rights reserved."
        },
        // 头部/用户
        header: {
            welcome: "欢迎，{name}!",
            account: "账号选项",
            logout: "退出",
            login: "登录",
            languageSwitch: "English/中文"
        },
        // 首页
        home: {
            uploadPreviewAlt: "预览",
            uploadDragText: "拖放图片到此处",
            uploadSupportText: "(支持 JPG, PNG, WEBP, HEIC等，最大5MB)",
            uploadClickText: "或点击选择文件",
            promptLabel: "提示词",
            promptPlaceholder: "输入提示词描述您想要的图片（例如：可爱的3d汽车，等距视图）",
            styles: {
                ghibli: "吉卜力风格",
                pixar: "皮克斯风格",
                anime: "动漫风格",
                chibi3d: "3D Q版风格",
                cute3dtoycar: "可爱的3D玩具汽车"
            },
            login: "请先登录",
            generating: "生成中...",
            generateBtn: "生成图片",
            resultTitle: "生成结果",
            resultImgAlt: "生成图片"
        },
    },
    en: {
        app: {
            title: "AI Image Creator",
        },
        navigation: {
            features: "Features",
            samples: "Samples",
            price: "Pricing",
            start: "Start Creating",
        },
        auth: {
            login: "Login",
            logout: "Logout",
            signUp: "Sign Up",
            email: "Email",
            password: "Password",
            rememberMe: "Remember me",
            forgotPassword: "Forgot password?",
            loginTitle: "Sign in to your account",
            loginWithGithub: "Sign in with GitHub",
            or: "or",
            verifyCode: "Verification Code",
            sendCode: "Send Code",
        },
        landing: {
            title: "AI Image Creator",
            description: "Transform your photos into artwork and generate images in various styles using AI technology. Create stunning images from just a single sentence. Choose from multiple image generation models including GPT-4 and Doubao.",
            getStarted: "Start Creating",
            learnMore: "Browse Works",
        },
        // 功能介绍区块
        featuresSection: {
            sectionTitle: "Move your finger, AI draws for you",
            sectionDesc: "With the most advanced AI technology, turn your ideas into beautiful images. No drawing skills required, you can create professional works.",
            features: [
                {
                    title: "Diverse styles, draw whatever you want",
                    desc: "Ghibli fantasy, trendy anime, exquisite 3D cartoon, retro film... Hundreds of styles to choose from. When inspiration comes, you can draw it immediately."
                },
                {
                    title: "Clear instructions, draw as you wish",
                    desc: "Powerful AI understands your long instructions. Actions, camera, lighting, all can be accurately presented. Realistic effects, full of details."
                },
                {
                    title: "Image and text combination, better expression",
                    desc: "Whether making posters, memes, or teaching diagrams, just input text and you’ll automatically get suitable images. Clear and attractive."
                },
                {
                    title: "Ready-made templates, easy for beginners",
                    desc: "We have prepared many useful prompt templates, all verified by users. Simple and easy to understand, even without experience you can easily create great works."
                }
            ]
        },
        // 价格区块
        priceSection: {
            sectionTitle: "Pricing",
            sectionDesc: "Choose the plan that suits you",
            sectionSubDesc: "Choose a cost-effective plan, enjoy the best features and the best price.",
            plans: [
                {
                    name: "Personal Trial",
                    desc: "Suitable for individuals to try for the first time, to evaluate the effect of AI-generated images.",
                    features: ["5 image generations", "Email support", "Image download"],
                    buy: "Buy Now"
                },
                {
                    name: "Bulk Purchase",
                    desc: "Suitable for teams, for batch image generation and commercial use.",
                    features: ["5 image generations", "Email support", "Image download", "Instant messaging tool support"],
                    buy: "Buy Now"
                }
            ]
        },
        // 作品展示区块
        sampleSection: {
            sectionTitle: "With just one sentence, you can generate images like this",
            sectionDesc: "We have prepared many useful prompt templates, all verified by users. Simple and easy to understand, even without experience you can easily create great works.",
            styles: [
                "Ghibli fantasy style", "Trendy anime style", "Cartoon style", "Masterpiece recreation", "Poster direct output (3D)", "Fantasy scene", "Nostalgic cartoon style", "Photo 3D transformation"
            ]
        },
        // 页脚
        footer: {
            slogan: "Empowering creativity with AI-driven tools, making creation simpler, smarter, and more efficient.",
            copyright: "All rights reserved."
        },
        // 头部/用户
        header: {
            welcome: "Welcome, {name}!",
            account: "Account Options",
            logout: "Logout",
            login: "Login",
            languageSwitch: "English/中文"
        },
        // Home page
        home: {
            uploadPreviewAlt: "Preview",
            uploadDragText: "Drag and drop image here",
            uploadSupportText: "(Supports JPG, PNG, WEBP, HEIC, up to 5MB)",
            uploadClickText: "or click to select file",
            promptLabel: "Prompt",
            promptPlaceholder: "Enter a prompt describing the image you want (e.g. cute 3D car, isometric view)",
            styles: {
                ghibli: "Ghibli Style",
                pixar: "Pixar Style",
                anime: "Anime Style",
                chibi3d: "3D Chibi Style",
                cute3dtoycar: "Cute 3D Toy Car"
            },
            login: "Please login first",
            generating: "Generating...",
            generateBtn: "Generate Image",
            resultTitle: "Result",
            resultImgAlt: "Generated Image"
        },
    },
}; 