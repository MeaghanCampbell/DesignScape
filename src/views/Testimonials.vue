
<script setup>
    import ethan from '../assets/headshots/ethan.png'
    import isabella from '../assets/headshots/isabella.png'
    import sam from '../assets/headshots/sam.png'
    import lily from '../assets/headshots/lily.png'
    import ben from '../assets/headshots/ben.png'
    const items = [
    {
        name: "Lily Thompson",
        title: "Lead UX Designer, MoTech",
        image: lily,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
        name: "Isabella Kim",
        title: "CTO, Art",
        image: isabella,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
        name: "Ethan Walker",
        title: "Creative Director, TechVerse",
        image: ethan,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
        name: "Benjamin Patel",
        title: "CEO, Patel Creative",
        image: ben,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
        name: "Samuel Garcia",
        title: "Front-End Developer, Apple",
        image: sam,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    ]
</script>

<template>
    <div class="relative overflow-hidden py-14 sm:py-28">
       
        <div class="rounded-full border border-sky-400 px-4 py-0.5 text-sm text-white w-fit mx-auto text-center">Our Community</div>

        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-6 text-center mb-10">Loved by hundreds of creators</h2>

        <div class="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
            <div v-for="item in [...items, ...items]" :key="item.name" class="h-full px-2.5">
                <div class="relative h-full w-[28rem] rounded-2xl border border-white/5 bg-white/5 px-8 py-6">
                    <div class="pb-4 font-light text-white/75">{{ item.body }}</div>
                    <div class="mt-auto flex items-center gap-4">
                        <img :src="item.image" class="h-9 w-9 rounded-full" />
                        <div class="flex flex-col text-sm">
                            <div class="text-white">{{ item.name }}</div>
                            <div class="text-white/75">{{ item.title }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
