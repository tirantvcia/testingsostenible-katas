import { MotionSensor, VideoRecorder, VideoController } from '../../../core/kata/video/videoSurveillance';


describe("The Surveillance Controller", () => {
    it("asks the recorder to stop recording wher the sensor detects no motion", () => {
        let called = false;
        const saveCall = () => {
            called = true;
        }


        const motionSensor = new MotionSensorSpy();
        const videoRecorder = new VideoRecorderSpy();
        videoRecorder.stopRecording = saveCall;

        const videoController = new VideoController(motionSensor, videoRecorder);

        videoController.recordMotion();
        expect(called).toBeTruthy();

    })

    it("asks the recorder to start recording wher the sensor detects no motion", () => {
        let called = false;
        const saveCall = () => {
            called = true;
        }
        const isDetectedMovement = () => {
            return true;
        }

        const motionSensor = new MotionSensorSpy();
        const videoRecorder = new VideoRecorderSpy();
        const videoController = new VideoController(motionSensor, videoRecorder);
        videoRecorder.startRecording = saveCall;
        motionSensor.isDetectingMotion = isDetectedMovement;
        videoController.recordMotion();
        expect(called).toBeTruthy();

    })

})

export class MotionSensorSpy implements MotionSensor {


    isDetectingMotion(): boolean {
        return false;
    }

}

export class VideoRecorderSpy implements VideoRecorder {


    startRecording(): void {

        console.log('start recording');
    }
    stopRecording(): void {

        console.log('stop recording');

    }

}
