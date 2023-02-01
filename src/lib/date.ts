export const formatDate = (d: Date): string => {
	const yyyy = d.getFullYear().toString();
	const MM = ('00' + (d.getMonth() + 1).toString()).slice(-2);
	const dd = ('00' + d.getDate().toString()).slice(-2);
	const hh = ('00' + d.getHours().toString()).slice(-2);

	return `${yyyy}_${MM}_${dd}_${hh}`;
};
