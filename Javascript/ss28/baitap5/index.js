const company = {

    name: "RikkeiSoft",

    location: "Hà Nội",

    employees: [

        { name: "Nguyễn Văn Luận", position: "Developer" },

        { name: "Nguyễn Văn Hoàng", position: "Tester" },

        { name: "Hoàng Nam Cao", position: "Manager" }

    ]

};

console.log(`Tên công ty: ${company.name}`);
company.employees.forEach((curr, index) => {
    console.log(`${index + 1}. Tên nhân viên: ${curr.name}`);
})