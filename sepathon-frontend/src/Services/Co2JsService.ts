import { co2 } from '@tgwf/co2';
const swd = new co2({ model: "swd" });

const calculateCarbonFootprint = (transferSize: number) => {
    return swd.perByte(transferSize)
}

export default calculateCarbonFootprint;