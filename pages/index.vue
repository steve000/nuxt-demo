<template>
    <section>
        <div class="header">
            <Menus></Menus>
            <div class="banner">
                {{qiniu.data}}
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {
        Component,
        Watch,
        Vue
    } from "nuxt-property-decorator"
    import {Action} from 'vuex-class'
    import Menus from "~/components/Menus.vue"

    @Component({
        components: {
            Menus
        }
    })

    export default class extends Vue {
        private qiniu: any = {};

        @Action getQiniu !: Function;

        private async getQiu_yp() {
            this.qiniu = await this.getQiniu();
            console.log(this.qiniu.data.token, 'test')
        }

        private created() {
            this.getQiu_yp();
        }

        // 如果 `qiniu` 发生改变，下面方法就会运行
        @Watch('qiniu', {immediate: true, deep: true})
        private onPersonChanged(val: any, oldVal: any) {
            console.log(val, 'val');
            console.log(oldVal, 'oldVal');
        }
    }
</script>

<style scoped lang="less">
    .header {
        .banner {

        }
    }
</style>

