document.getElementById('header-container').style.backgroundColor = 'green';

const emergencyTasksBc = document.getElementsByClassName('emergency-tasks');
emergencyTasksBc[0].style.backgroundColor = 'pink';

const emergencyTasksDiv = document.querySelectorAll('div h3');
emergencyTasksDiv[0].style.backgroundColor = 'purple';
emergencyTasksDiv[1].style.backgroundColor = 'purple';

const noEmergencyTasksBc = document.getElementsByClassName('no-emergency-tasks');
noEmergencyTasksBc[0].style.backgroundColor = 'yellow';

const noEmergencyTasksDiv = document.querySelectorAll('.no-emergency-tasks div h3');
noEmergencyTasksDiv[0].style.backgroundColor = 'black';
noEmergencyTasksDiv[1].style.backgroundColor = 'black';

document.getElementById('footer-container').style.backgroundColor = 'green';

