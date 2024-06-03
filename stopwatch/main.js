
        let timer;
        let seconds = 0;
        let isRunning = false;

        function formatTime(sec) {
            let hrs = Math.floor(sec / 3600);
            let mins = Math.floor((sec % 3600) / 60);
            let secs = sec % 60;

            return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        function updateDisplay() {
            document.getElementById('digits').innerText = formatTime(seconds);
        }

        function startb() {
            if (!isRunning) {
                timer = setInterval(() => {
                    seconds++;
                    updateDisplay();
                }, 1000);
                isRunning = true;
            }
        }

        function stopb() {
            if (isRunning) {
                clearInterval(timer);
                isRunning = false;
            }
        }

        function resetb() {
            clearInterval(timer);
            seconds = 0;
            updateDisplay();
            isRunning = false;
        }
