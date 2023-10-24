<script setup>
    import Button from '../components/Button.vue'
</script>

<template>
    <div class="relative isolate overflow-hidden bg-black">

        <svg class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
            <defs>
                <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                    <path d="M.5 200V.5H200" fill="none" />
                </pattern>
            </defs>
            <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
                <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
        </svg>

        <div class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
            <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"></div>
        </div>

        <div class="px-4 sm:px-8 py-14 sm:py-28 max-w-6xl mx-auto lg:flex">
            <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#f0abfc;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#7dd3fc;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#gradient)" d="M25 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4S27.206 10 25 10zM7 19c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4S9.206 19 7 19zM25 48c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4S27.206 48 25 48zM43 19c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4S45.206 19 43 19zM7 39c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4S9.206 39 7 39zM43 39c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4S45.206 39 43 39zM25 29c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4S27.206 29 25 29zM25 31c-.341 0-.674-.035-1-.09v7.181c.326-.055.659-.09 1-.09s.674.035 1 .09V30.91C25.674 30.965 25.341 31 25 31zM20.319 21.256l-7.668-4.26c-.226.639-.555 1.229-.971 1.749l7.668 4.26C19.575 22.365 19.903 21.775 20.319 21.256zM30.652 23.004l7.668-4.26c-.416-.519-.744-1.11-.971-1.749l-7.668 4.26C30.097 21.775 30.425 22.365 30.652 23.004zM12.738 13.249l7.426-3.713C19.771 9 19.461 8.401 19.262 7.751l-7.426 3.713C12.229 12 12.539 12.599 12.738 13.249zM20.164 40.464l-7.426-3.713c-.199.65-.509 1.25-.902 1.786l7.426 3.713C19.461 41.599 19.771 40.999 20.164 40.464zM37.262 36.751l-7.426 3.713c.393.536.703 1.136.902 1.786l7.426-3.713C37.771 38 37.461 37.4 37.262 36.751z"/>
                </svg>                
                <div class="rounded-full border border-fuchsia-400 px-4 py-0.5 text-sm text-white inline-block mt-16">
                    Features
                </div>
                <h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Deploy to the cloud with confidence</h1>
                <p class="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                <div class="mt-10 flex items-center gap-x-6">
                    <Button />
                    <a href="#" class="font-semibold leading-6 text-sky-300 text-lg">Learn more <span aria-hidden="true">→</span></a>
                </div>
            </div>
            <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                    <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" width="2432" height="1442" class="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10">
                </div>
            </div>
        </div>

    </div>
</template>