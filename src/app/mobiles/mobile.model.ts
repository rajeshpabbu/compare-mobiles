export class Mobile {
  public id: string;
  public mobilename: string;
  public brand: string;
  public release_date: string;
  public sim_type: string;
  public os: string;
  public chipset: string;
  public cpu: string;
  public gps: string;
  public sensors: string;
  public dimensions: string;
  public weight: string;
  public resolution: string;
  public display_type: string;
  public ram: string;
  public external: string;
  public rear_camera: string;
  public front_camera: string;

  constructor(
    id: string,
    mobilename: string,
    brand: string,
    release_date: string,
    sim_type: string,
    os: string,
    chipset: string,
    cpu: string,
    gps: string,
    sensors: string,
    dimensions: string,
    weight: string,
    resolution: string,
    display_type: string,
    ram: string,
    external: string,
    rear_camera: string,
    front_camera: string
  ) {
    this.id = id;
    this.mobilename = mobilename;
    this.brand = brand;
    this.release_date = release_date;
    this.sim_type = sim_type;
    this.os = os;
    this.chipset = chipset;
    this.cpu = cpu;
    this.gps = gps;
    this.sensors = sensors;
    this.dimensions = dimensions;
    this.weight = weight;
    this.resolution = resolution;
    this.display_type = display_type;
    this.ram = ram;
    this.external = external;
    this.front_camera = front_camera;
    this.rear_camera = rear_camera;
  }
}
