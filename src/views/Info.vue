<script setup>
    import ScrollReveal from "@/components/ScrollReveal.vue"
</script>

<template>
    <ScrollReveal v-slot="{ isActive }" :offset="200" class="[--duration:500ms]">
        <div
            :class="{ 'translate-y-8 opacity-0': !isActive }"
            class="flex justify-center transition-[transform,opacity] duration-[--duration]">
            <div class="rounded-full border border-fuchsia-400 px-4 py-0.5 text-sm text-white">
            Features
            </div>
        </div>

        <h2
            :class="{ 'translate-y-8 opacity-0': !isActive }"
            class="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-6 text-center transition-[transform,opacity] duration-[--duration]">
            FlowTone does it all
        </h2>

        <h3
            :class="{ 'translate-y-8 opacity-0': !isActive }"
            class="mt-4 text-center text-white/75 transition-[transform,opacity] duration-[--duration] text-lg">
            Drop your file onto FlowTone and we'll enhance it.
            <br class="hidden md:block" />
            No need to separate audio from video.
        </h3>

        <div class="relative bg-black mt-14 transition-[transform,opacity] duration-[--duration]"
            :style="{ '--delay': `${(index + 1) * 250}ms` }"
            :class="{
                'translate-y-8 opacity-0': !isActive,
                'delay-[--delay]': isActive,
            }">
            <div class="mx-auto max-w-6xl lg:flex lg:justify-between lg:px-8">
                <div class="lg:flex lg:w-1/2 mx-auto max-w-2xl mb-10 lg:mb-0">
                    <div class="relative h-80 lg:h-auto lg:w-full lg:grow xl:ml-0 bg-gradient-to-br to-fuchsia-300 from-sky-300 rounded-2xl"></div>
                </div>
                <div class="px-6">
                    <div class="mx-auto max-w-2xl lg:ml-8 lg:mr-0 lg:w-full">
                        <div class="mt-5 text-lg leading-7 text-white/60 lg:max-w-none">
                            <p class="mb-4">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra.</p>
                            <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
                            <ul role="list" class="mt-8 space-y-8 text-white/60">
                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-sky-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong class="font-semibold text-sky-300">Push to deploy.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</span>
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-sky-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong class="font-semibold text-sky-300">SSL certificates.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative bg-black mt-14 transition-[transform,opacity] duration-[--duration]"
            :style="{ '--delay': `${(index + 1) * 250}ms` }"
            :class="{
                'translate-y-8 opacity-0': !isActive,
                'delay-[--delay]': isActive,
            }">
            <div class="mx-auto max-w-6xl lg:flex lg:flex-row-reverse lg:justify-between lg:px-8">
                <div class="lg:flex lg:w-1/2 mx-auto max-w-2xl mb-10 lg:mb-0">
                    <div class="relative h-80 lg:h-auto lg:w-full lg:grow xl:ml-0 bg-gradient-to-br to-emerald-300 from-orange-300 rounded-2xl"></div>
                </div>
                <div>
                    <div class="mx-auto max-w-2xl lg:pr-14 lg:ml-0 lg:w-full">
                        <div class="mt-5 text-lg leading-7 text-white/60">
                            <p class="mb-4">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra.</p>
                            <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
                            <ul role="list" class="mt-8 space-y-8 text-white/60">
                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-sky-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong class="font-semibold text-sky-300">Push to deploy.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</span>
                                </li>
                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-sky-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong class="font-semibold text-sky-300">SSL certificates.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ScrollReveal>
</template>