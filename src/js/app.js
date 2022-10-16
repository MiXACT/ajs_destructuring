export default function destructing(obj) {
	const arr = [];
	for (const item of obj.special) {
		const [id, name, icon, description = 'Описание недоступно'] = [item.id, item.name, item.icon, item.description];
		arr.push({
			id, name, icon, description,
		});
	}
	return arr;
}
