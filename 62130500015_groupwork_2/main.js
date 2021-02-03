    const app = {
        data() {
            return {
                firstname:'jirpat',
                lastname :'karawaek',
                title :'Student',
                article: '34',
                followers:'940',
                ratings:'8.9',
                profile:'/INT203_62130500015/62130500015_groupwork_2/images/profile.jpg'
            }
        }
        ,
    }
    mountedapp = Vue.createApp(app).mount('#app')