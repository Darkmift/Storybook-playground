<template>
	<div class="list-item">
		<input type="text" readonly :value="task.title" />
	</div>
</template>

<script>
import '../assets/styles/index.css';
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
};
</script>