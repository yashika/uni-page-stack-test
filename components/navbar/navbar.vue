<template>
	<view>
		<navigator open-type="navigate" url="../../pages/A/A"><button>A</button></navigator>
		<navigator open-type="navigate" url="../../pages/B/B"><button>B</button></navigator>
		<navigator open-type="navigate" url="../../pages/C/C"><button>C</button></navigator>
		<button @tap="back">BBACK</button>
		<button @tap="showPage">show page&history</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			back() {
				const backDepth = 5 // 假设回退 2 层
				getApp().globalData.history.splice(-backDepth,backDepth)
				uni.navigateBack({
					delta: backDepth
				})
			},
			showPage() {
				console.log(getCurrentPages())
				console.log(...getApp().globalData.history)
			}
		}
	}
</script>

<style lang="scss">

</style>
