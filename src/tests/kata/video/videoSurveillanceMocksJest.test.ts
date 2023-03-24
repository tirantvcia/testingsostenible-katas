import { MotionSensor, VideoRecorder, VideoController } from '../../../core/kata/video/videoSurveillance';


describe("The Surveillance Controller", () => {
    let motionSensor: MotionSensorStopMovementDetectSpy;
    let videoRecorder: VideoRecorderSpy;
    let videoController: VideoController;

    beforeEach(() => {
        motionSensor = new MotionSensorStopMovementDetectSpy();
        videoRecorder = new VideoRecorderSpy();
        videoController = new VideoController(motionSensor, videoRecorder);
    });

    it("asks the recorder to stop recording wher the sensor detects no motion", () => {

        const videoRecorderStopRecording = jest.spyOn(videoRecorder, 'stopRecording');
        videoController.recordMotion();
        expect(videoRecorderStopRecording).toHaveBeenCalled();

    })

    it("asks the recorder to start recording wher the sensor detects no motion", () => {

        const motionSensorStartDetectionMovement = jest.spyOn(motionSensor, 'isDetectingMotion');
        motionSensorStartDetectionMovement.mockImplementation(() => { return true; })
        const videoRecorderStartRecording = jest.spyOn(videoRecorder, 'startRecording');

        videoController.recordMotion();
        expect(videoRecorderStartRecording).toHaveBeenCalled();

    })

    it("asks the recorder to stop recording when the sensor throws unexpected error", () => {

        const motionSensorStartDetectionMovement = jest.spyOn(motionSensor, 'isDetectingMotion');
        motionSensorStartDetectionMovement.mockImplementation(() => { throw new Error('ErrorNoEsperat') })
        const videoRecorderStopRecording = jest.spyOn(videoRecorder, 'stopRecording');
        videoController.recordMotion();
        expect(videoRecorderStopRecording).toHaveBeenCalled();

    })

    it("asks the motionSensor every second", () => {

        const motionSensorStartDetectionMovement = jest.spyOn(motionSensor, 'isDetectingMotion');
        videoController.recordMotion(3);
        expect(motionSensorStartDetectionMovement).toHaveBeenCalledTimes(3);

    })

})

export class MotionSensorStopMovementDetectSpy implements MotionSensor {


    isDetectingMotion(): boolean {
        return false;
    }

}

export class VideoRecorderSpy implements VideoRecorder {


    startRecording(): void {

        // console.log('start recording');
    }
    stopRecording(): void {
        //     console.log('stop recording');

    }

}