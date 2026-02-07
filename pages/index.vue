<script setup lang="ts">
import { useHead } from '#imports'
import Banner from '~/components/Banner.vue'
import Works from '~/components/Works.vue'
import About from '~/components/About.vue'
// import ContactForm from '~/components/ContactForm.vue'
import Win from '~/components/Win.vue'
import { ref, onMounted, nextTick } from 'vue';
// @ts-ignore: ignore missing type declarations for aos
import AOS from 'aos'
import 'aos/dist/aos.css'

// 引入圖片以獲取正確的打包路徑
import bannerImage from '~/assets/images/banner_m.webp'

useHead({
    title: "HAN作品集 | 前端工程師 & 網頁設計 | HAN’s Portfolio",
    meta: [
        // SEO
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: 'HAN 的個人作品集，專注於網頁設計、前端開發(Vue.js/Nuxt.js)、互動特效與系統平台建置。具備 RWD 響應式設計與 UI/UX 思維，致力於打造高品質的數位體驗。' },
        { name: 'keywords', content: 'HAN, 作品集, Portfolio, 前端工程師, Frontend Engineer, Vue.js, Nuxt.js, TypeScript, 網頁設計, Web Design, RWD, 響應式網頁, 網站特效, UI/UX' },
        { name: 'author', content: 'HAN' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'HAN作品集 | 前端工程師 & 網頁設計 Portfolio' },
        { property: 'og:description', content: '探索 HAN 的網頁設計與前端開發作品，專注 Vue.js、互動特效與系統平台建置。' },
        { property: 'og:url', content: 'https://han45678.github.io/HanWorks/' },
        { property: 'og:site_name', content: 'HAN Works' },
        // 使用 import 的變數，並加上網域 (origin)
        { property: 'og:image', content: `https://han45678.github.io${bannerImage}` },
        { property: 'og:image:alt', content: 'HAN Works Portfolio Banner' },
        { property: 'og:image:type', content: 'image/webp' },
        { property: 'og:locale', content: 'zh_TW' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'HAN作品集 | 前端工程師 & 網頁設計 Portfolio' },
        { name: 'twitter:description', content: '探索 HAN 的網頁設計與前端開發作品，專注 Vue.js、互動特效與系統平台建置。' },
        { name: 'twitter:image', content: `https://han45678.github.io${bannerImage}` },
        { name: 'twitter:image:alt', content: 'HAN Works Portfolio Banner' }
    ],
    link: [
        { rel: 'icon', type: 'image/svg+xml', href: 'https://han45678.github.io/HanWorks/icon.ico' },
        { rel: 'canonical', href: 'https://han45678.github.io/HanWorks/' }
    ],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "HAN",
            "url": "https://han45678.github.io/HanWorks/",
            "image": "https://han45678.github.io/HanWorks/icon.ico",
            "sameAs": [
                "https://github.com/han45678",
                "https://www.linkedin.com/in/han0717"
            ],
            "jobTitle": "前端工程師",
            "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
            },
            "knowsAbout": ["Vue.js", "Nuxt.js", "TypeScript", "JavaScript", "SCSS", "Web Design", "UI/UX", "RWD", "Frontend Development"]
            })
        } as any
    ]
})

const worksRef = ref < HTMLElement | null > (null);
const aboutRef = ref < HTMLElement | null > (null);
// const contactFormRef = ref < HTMLElement | null > (null);
const isLoading = ref < boolean > (true);

const toWorks = () => {
    worksRef.value?.scrollIntoView({ behavior: 'smooth' });
};

const toAbout = () => {
    aboutRef.value?.scrollIntoView({ behavior: 'smooth' });
};

onMounted(() => {
    // 模擬載入時間，例如 2 秒
    setTimeout(async() => {
        isLoading.value = false;

        // 確保 DOM 已經更新後再初始化 AOS
        await nextTick();
        AOS.init();
    }, 1000);
});
</script>

<template>
    <div>
        <transition name="fade">
            <div
                v-if="isLoading"
                id="loading"
            />
        </transition>

        <transition v-if="!isLoading">
        <Banner
            @to-works="toWorks"
            @to-about="toAbout"
        />
        </transition>

        <transition v-if="!isLoading" ref="worksRef">
            <Works />
        </transition>

        <transition v-if="!isLoading" ref="aboutRef">
            <About />
        </transition>

        <!-- <transition v-if="!isLoading" ref="contactFormRef">
            <ContactForm />
        </transition> -->
        
        <transition name="fade">
            <Win />
        </transition>
    </div>
</template>

<style lang="scss" src="~/assets/scss/main.scss"></style>
