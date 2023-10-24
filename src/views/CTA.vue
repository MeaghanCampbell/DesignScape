<script setup>
    import Button from '@/components/Button.vue'
</script>

<template>

    <div class="bg-black">
        <div class="relative bg-white/2.5 md:rounded-3xl lg:rounded-[3rem]">
        
            <div class="z-40 absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div class="z-40 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950">
                <div class="h-1.5 w-8 rounded-lg bg-white"></div>
            </div>
            <div class="z-40 absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div class="z-40 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-950">
                <div class="h-1.5 w-8 rounded-lg bg-white"></div>
            </div>


            <div class="relative isolate overflow-hidden bg-black">
                <div class="relative bg-white/2.5md:rounded-3xl lg:rounded-[3rem]">

                    <svg class="absolute inset-0 z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
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

                    <div class="absolute left-[calc(50%-4rem)] top-10 z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
                        <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"></div>
                    </div>



                    <div class="mx-auto max-w-2xl text-center py-14 sm:py-28 px-4 sm:px-8">
                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your productivity.<br>Start using our app today.</h2>
                        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
                        <div class="mt-10 flex items-center justify-center gap-x-6">
                            <Button />
                            <a href="#" class="font-semibold leading-6 text-sky-300 text-lg">Learn more <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                
                </div>
            </div>
        
        </div>

    </div>
    
</template>