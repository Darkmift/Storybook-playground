<template>
	<div :class="classes">
		<label class="checkbox">
			<input type="checkbox" :checked="isChecked" disabled name="checked" />
			<span class="checkbox-custom" @click="archiveTask" />
		</label>
		<div class="title">
			<input
				type="text"
				:value="task.title"
				readonly
				placeholder="Input title"
			/>
		</div>
		<div class="actions">
			<a v-if="!isChecked" @click="pinTask">
				<span class="icon-star" />
			</a>
		</div>
	</div>
</template>

<style>
@import '../assets/index.css';
</style>

<script>
export default {
	name: "Task",
	props: {
		task: {
			type: Object,
			required: false,
			default: () => ({ id: "", state: "", title: "" }),
			validator: (task) => {
				return ["id", "state", "title", "updatedAt"].every(
					(key) => key in task
				);
			},
		},
	},
	computed: {
		classes() {
			return {
				"list-item TASK_INBOX": this.task.state === "TASK_INBOX",
				"list-item TASK_PINNED": this.task.state === "TASK_PINNED",
				"list-item TASK_ARCHIVED": this.task.state === "TASK_ARCHIVED",
			};
		},
		isChecked() {
			return this.task.state === "TASK_ARCHIVED";
		},
	},
	methods: {
		archiveTask() {
			this.$emit("archiveTask", this.task.id);
		},
		pinTask() {
			this.$emit("pinTask", this.task.id);
		},
	},
};
</script>