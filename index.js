// Write your solution in this file!
const employee= {
    name : 'sam',
    streetAddress : '11 broadway'
}
function updateEmployeeWithKeyAndValue(employee, key,value){
    return{...employee,[key]:value};

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key,value){
    employee[key]= value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newObj = object.assign({}, employee)
    delete newObj[key];
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}