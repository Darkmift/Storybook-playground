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

<style scoped>
.list-item {
	font-size: 14px;
	line-height: 20px;
	display: flex;
	flex-wrap: wrap;
	height: 3rem;
	width: 100%;
	background: white;
	transition: all ease-out 150ms;
}
.list-item .title {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	flex: 1;
}
.list-item input[type="text"] {
	background: transparent;
	width: 100%;
}
.list-item input[type="text"]:focus {
	cursor: text;
}
.list-item .actions {
	transition: all 200ms ease-in;
	padding-right: 20px;
}
.list-item .actions a {
	display: inline-block;
	vertical-align: top;
	text-align: center;
	color: #eee;
}
.list-item .actions a:hover {
	color: #2cc5d2;
}
.list-item .actions a:active {
	color: #555;
}
.list-item .actions [class^="icon-"] {
	font-size: 16px;
	line-height: 24px;
	line-height: 3rem;
	text-align: center;
}
.list-item.TASK_PINNED .icon-star {
	color: #2cc5d2;
}
.list-item.TASK_ARCHIVED input[type="text"] {
	color: #aaa;
}
.list-item:hover {
	background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);
}
.list-item:hover .checkbox {
	cursor: pointer;
}
.list-item + .list-item {
	border-top: 1px solid #f0f9fb;
}
.list-item.checked input[type="text"] {
	color: #ccc;
	text-decoration: line-through;
}
.list-item.checked .delete-item {
	display: inline-block;
}
</style>

<script>
// import '../assets/styles/index.css';
export default {
	name: "Task",
	props: {
		task: {
			type: Object,
			required: true,
			default: () => ({ id: "", state: "", title: "" }),
			validator: (task) => ["id", "state", "title"].every((key) => key in task),
		},
	},
	computed: {
		classes() {
			return {
				"list-item TASK_INBOX": this.props.task.state === "TASK_INBOX",
				"list-item TASK_PINNED": this.props.task.state === "TASK_PINNED",
				"list-item TASK_ARCHIVED": this.props.task.state === "TASK_ARCHIVED",
			};
		},
		isChecked() {
			return this.props.task.state === "TASK_ARCHIVED";
		},
	},
	methods: {
		archiveTask() {
			emit("archive-task", this.props.task.id);
		},
		pinTask() {
			emit("pin-task", this.props.task.id);
		},
	},
};
</script>