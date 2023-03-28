<template>
    <div class="stopwatch">
        <div class="stopwatch__value">
            <div class="value">
                {{ this.getTime() }}
            </div>
        </div>
        <div class="stopwatch__btns">
            <div 
                @click="this.setIsActive"
                :class="this.isActive ? 'pause__btn': 'play__btn'">
            </div>
            <div 
                @click="this.reset" 
                class="stop__btn">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            _time: 0,
            _timerId: 0,
            isActive: false
        }
    },
    methods: {
        getTime() {
            const time = new Date(this._time)
            const hour = time.getUTCHours()
            const minute = time.getUTCMinutes()
            const second = time.getUTCSeconds()
            if (hour) {
                return `${hour}:${minute}:${second}`
            }
            if (minute) {
                return `${minute}:${second}`
            }
            return second;
        },
        reset() {
            this.isActive = false
            this._time = 0
            clearInterval(this._timerId)
        },
        setIsActive() {
            this.isActive = !this.isActive
            this.setTime
            if (this.isActive) {
                this._timerId = setInterval(() => {
                    this._time += 10
                }, 10)
            }
            else {
                clearInterval(this._timerId)
            }      
        }
    },
}
</script>

<style scoped>
    .stopwatch {
        width: 225px;
        height: 120px;
        background: #696969;
    }
    .stopwatch__value {
        height: 59.5px;
        border-bottom: .5px solid #9E9E9E;
        background: none;
    }
    .value {
        position: relative;
        top: 22px;
        left: 75px;
        width: 75px;
        height: 18px;
        background: none;
        
        font-family: 'Gotham Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 21px;
        text-align: center;
        color:#9E9E9E;
        
    }
    .stopwatch__btns {
        width: 225px;
        height: 59.5px;
        border-top: .5px solid #9E9E9E;
        background: none;
    }
    .play__btn {
        display: inline-block;
        width: 17px;
        height: 20px;
        background: url('@/assets/btn_icon/play.svg');
        margin: 19.5px 48px 0 70px;
    }
    .pause__btn {
        display: inline-block;
        width: 10px;
        height: 20px;
        background: url('@/assets/btn_icon/pause.svg') no-repeat;
        margin: 19.5px 52px 0 73px;
    }
    .stop__btn {
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;
        background: url('@/assets/btn_icon/stop.svg');
        margin-top: 19.5px;
    }
</style>
