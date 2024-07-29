import { PropertyModel } from "../models/propertyModel";

export interface PropertyProps {
    property: PropertyModel;
    markFavorite?: (is_favorite: boolean) => void;
}