export interface MotionSensor {
    isDetectingMotion(): boolean;
}

export interface VideoRecorder {
    startRecording(): void;
    stopRecording(): void;
}

export class VideoController {
    recordMotion(numberOfSensorDetections = 1) {
        try {
            for (let times = 0; times < numberOfSensorDetections; times++) {

                (this.sensor.isDetectingMotion()) ? this.recorder.startRecording() : this.recorder.stopRecording();
                waitOneSecond();
            }
        } catch (e) {
            this.recorder.stopRecording();
        }
    }
    constructor(private sensor: MotionSensor, private recorder: VideoRecorder) { }
}

function waitOneSecond() {
    let startTime = new Date().getTime();
    const numberMseconds = 1000;
    const endTime = startTime + numberMseconds;
    while (startTime < endTime) {
        startTime = new Date().getTime();
    }
}
